module.exports = function(sequelize, DataTypes) {
  var Donate = sequelize.define("Donate", {
      item: {
          type: DataTypes.STRING,
          allowNull: false
      },
      qty: {
          type: DataTypes.STRING,
          allowNull: true

      }
  });

  Donate.associate = function(models) {
    // We're saying that a Recipe should belong to an Usdr
    // A Recipe can't be created without an User due to the foreign key constraint
    Donate.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Donate;
};
