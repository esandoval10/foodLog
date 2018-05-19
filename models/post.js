module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      title: {
        // Logger name
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        // user input
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  
    Post.associate = function(models) {
      // We're saying that a Post should belong to an logger
      // A Post can't be created without a logger due to the foreign key constraint
      Post.belongsTo(models.Logger, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Post;
  };
  