module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define("Card", {
    title: DataTypes.STRING,
    text: DataTypes.STRING,
  });

  return Card;
};
