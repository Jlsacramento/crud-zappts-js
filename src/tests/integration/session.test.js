const request = require("supertest");

const app = require("../../server");
const truncate = require('../utils/truncate');
const { User } = require("../../app/models")
const factory = require("../utils/factories");

describe("Authentication", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("deve fazer login com credenciais válidas", async () => {
    const user = await factory.create("User", {
      password: "123456"
    });

    const response = await request(app)
      .post("/sessions")
      .send({
        email: user.email,
        password: "123456"
      });

    expect(response.status).toBe(200);
  });

  it("deve retornar jwt token se autenticado", async () => {
    const user = await factory.create("User", {
      password: "123456"
    });

    const response = await request(app)
      .post("/sessions")
      .send({
        email: user.email,
        password: "123456"
      });

    expect(response.body).toHaveProperty("token");
  });

  it("usuário deve acessar rotas privadas quando autenticado", async () => {
    const user = await factory.create("User");

    const response = await request(app)
      .get("/cards")
      .set("Authorization", `Bearer ${User.generateToken(user)}`);

    expect(response.status).toBe(200);
  });

  it("usuário não deve acessar rotas privadas sem o jwt token", async () => {
    const response = await request(app)
      .get("/cards");

    expect(response.status).toBe(401);
  });

  it("usuário não deve acessar rotas privadas com token inválido ", async () => {
    const response = await request(app)
      .get("/cards")
      .set("Authorization", `Bearer asdasdfsdfs`);

    expect(response.status).toBe(401);
  });
})
