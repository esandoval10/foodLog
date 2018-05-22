var express = require("express");

var router = express.Router();
var user = require("../models/bmi.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/bmi");
});

router.get("/bmi", function(req, res) {
  // express callback response 
  bmi.all(function(bmiData) {
    // wrapper for orm.js that using MySQL query callback will return bmi_data, render to index with handlebar
    res.render("index", { bmi_data: bmiData });
  });
});

// post route -> back to index
router.post("/bmi/create", function(req, res) {
  // takes the request object using it as input 
  bmi.create(req.body.user_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/bmi/:id", function(req, res) {
    bmi.update(req.params.id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});

module.exports = router;
