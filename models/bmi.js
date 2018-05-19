// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var bmi = {
  all: function(cb) {
    orm.all("bmi", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("bmi", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("bmi", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("bmi", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (bmiController.js).
module.exports = bmi;
