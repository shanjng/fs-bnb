const express = require("express");
const router = express.Router();
const userService = require("../services/user-service");

// HANDLER FUNCTIONS FOR THE ROUTER BELOW

router.get("/", (req, res) => {
    userService.prototype
      .getAll()
      .then(result => {
        //var parseData = JSON.parse(result);
        res.send(result);
      })
      .catch(err => {
        res.status(400).send(err);
      });
  });

router.get("/:id", (req, res) => {
  userService.prototype.getById(req.params.id)
  .then(result =>
    res.send(result)
  )
  .catch(err => {
    res.status(400).send(err)
  })
})
  
module.exports = router;