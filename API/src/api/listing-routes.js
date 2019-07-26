const express = require("express");
const router = express.Router();
const ListingService = require('../services/listing-service');
const listServ = new ListingService();

// create
router.post("/",function(req,res) {
    listServ.create(req.body)
    .then((resId) =>{
        res.send(JSON.stringify(resId))
        }
    )
    .catch(err => {
        res.status(400).send(err)
    })
})
// read
router.get("/",function(req,res) {
    listServ.get(req.body)
    .then(response => {
        res.send(response)
    })
    .catch(err => {
        res.status(400).send(err)
    })
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