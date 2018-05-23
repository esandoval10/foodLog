var orm = require("../config/orm.js");

var user = {
  all: function(cb) {
    orm.all("user", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("user", [ "userName", "gender", "age", "userWeight", "height", "waistSize", "activityLevel", "fatPercentage", "RMR","caloriesPerDay" ], [ name, false ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("user", {
      devoured: true
    }, condition, cb);
  }
};

module.exports = user;