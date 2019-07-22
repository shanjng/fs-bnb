const express = require("express");
const router = express.Router();

const User = require("../models/user-model");
const userService = require("../services/user-service");

// HANDLER FUNCTIONS FOR THE ROUTER BELOW

router.get("/", (req, res) => {
    userService.prototype
      .get()
      .then(result => {
        //var parseData = JSON.parse(result);
        res.send(result);
      })
      .catch(err => {
        res.status(400).send(err);
      });
  });
  
module.exports = router;