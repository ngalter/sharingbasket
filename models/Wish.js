module.exports = function(sequelize, DataTypes) {
    var Wish = sequelize.define("Wish", {
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
  
    return Wish;
  };
  