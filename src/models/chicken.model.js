module.exports = (sequelize, Sequelize) => {
  const Chicken = sequelize.define("chicken", {
    name: {
      type: Sequelize.STRING
    },
    weight: {
      type: Sequelize.INTEGER
    },
    birthday: {
      type: Sequelize.DATE
    }
  });

  return Chicken;
};