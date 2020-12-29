const bcrypt = require("bcryptjs");

const truncate = require('../utils/truncate');
const factory = require("../utils/factories");

describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("deve criar usuário com sucesso", async () => {
    const user = await factory.create("User");

    const compareHash = await bcrypt.compare(user.password, user.password_hash);

    expect({email: user.email, password: true}).toStrictEqual({email: user.email, password: compareHash});
  });
});
