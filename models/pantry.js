module.exports = function(sequelize, DataTypes) {
  var Pantry = sequelize.define("Pantry", {
      charityName: {
          type: DataTypes.STRING,
          allowNull: false

      },
      item: {
        type: DataTypes.STRING,
        allowNull: false
    },
    qty: {
        type: DataTypes.STRING,
        allowNull: true

    }
  });

  return Pantry;
};
