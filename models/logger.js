module.exports = function(sequelize, DataTypes) {
    var Logger = sequelize.define("Logger", {
      // Setting up the Logger model a name of data type STRING
      name: DataTypes.STRING
    });
  
    Logger.associate = function(models) {
      // Attaching Logger with Posts
      // If user is deleted, delete every associated Posts
      Logger.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };
  
    return Logger;
  };
  