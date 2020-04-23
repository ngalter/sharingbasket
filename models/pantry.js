module.exports = function(sequelize, DataTypes) {
  var Pantry = sequelize.define("Pantry", {
      ein: {
          type: DataTypes.STRING,
          allowNull: false
      },
      charityName: {
          type: DataTypes.STRING,
          allowNull: false

      },
      address1: {
          type: DataTypes.STRING,
          allowNull: true
 
      },
      city: {
          type: DataTypes.STRING,
          allowNull: true
 
      },
      state: {
          type: DataTypes.STRING,
          allowNull: true
   
      },
      zip: {
          type: DataTypes.STRING,
          allowNull: true

      },
      wishlist: {
          type: DataTypes.STRING,
          allowNull: true

      }
  });

  Pantry.associate = function(models) {
    // We're saying that a Recipe should belong to an Usdr
    // A Recipe can't be created without an User due to the foreign key constraint
    Pantry.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Pantry;
};