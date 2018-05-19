module.exports = function(sequelize, DataTypes) {
    var Bodymass = sequelize.define("Bodymass", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      weight: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: false
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: false
      },
      height: {
          type: DataTypes.DOUBLE,
          allowNull: false,
          defaultValue: false
      },
      age: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: false
      },
      waist_size: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: false
    },
    body_fat: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: false
    },
    rmr: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: false
    },
    calorie_per_day: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: false
    },
    activity_level: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: false
    },

    });
    return Bodymass;
  };
  