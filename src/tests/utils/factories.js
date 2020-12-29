const faker = require("faker");
const { factory } = require("factory-girl");
const { User } = require("../../app/models");
const { Card } = require("../../app/models");

factory.define("User", User, {
  email: faker.internet.email(),
  password: faker.internet.password()
});

factory.define("Card", Card, {
  title: faker.lorem.word,
  text: faker.lorem.paragraph
})

module.exports = factory;
