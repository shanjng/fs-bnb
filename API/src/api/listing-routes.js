const express = require("express");
const router = express.Router();

// create
router.post("/",function(req,res) {
    res.send("listings POST request");
})
// read
router.get("/",function(req,res) {
    res.send("listings GET request");
})
// update
router.put("/",function(req,res) {
    res.send("listings PUT request");
})
// delete
router.delete("/",function(req,res) {
    res.send("listings DELETE request");
})

module.exports = router;