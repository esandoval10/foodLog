module.exports = function(sequelize, DataTypes) {
    var Author = sequelize.define("Logger", {
      // Giving the Logger model a name of type STRING
      name: DataTypes.STRING
    });
  
    Logger.associate = function(models) {
      // Associating Logger with Posts
      // When a Logger is deleted, also delete any associated Posts
      Logger.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };
  
    return Logger;
  };
  