const truncate = require('../utils/truncate');
const factory = require("../utils/factories");

describe('Card', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('must be able to create a letter', async () => {
    const card = await factory.create("Card");

    console.log(card);

    expect({title: card.title, text: card.text}).toStrictEqual({title: card.title, text: card.text});
  })
})
