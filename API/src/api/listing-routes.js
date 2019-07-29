const express = require("express");
const router = express.Router();
const ListingService = require('../services/listing-service');

// create listing
router.post("/",function(req,res) {
    ListingService.prototype.create(req.body)
    .then((resId) =>{
        res.send(JSON.stringify(resId))
        }
    )
    .catch(err => {
        res.status(400).send(err)
    })
    
})

router.post("/imgUrl",function(req,res) {
    ListingService.prototype.addImgUrl(req.body)
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
    ListingService.prototype.getAll()
    .then(response => {
        res.send(response)
    })
    .catch(err => {
        res.status(400).send(err)
    })
})

router.get("/:id",function(req,res) {
    ListingService.prototype.getById(req.params.id)
    .then(response => {
        res.send(response)
    })
    .catch(err => {
        res.status(400).send(err)
    })
})

router.get("/provider/:id", (req, res) => {
    ListingService.prototype.getByProviderId(req.params.id)
    .then(response => {
        res.send(response)
    })
    .catch(err => {
        res.status(400).send(err)
    })
})

// update
router.patch("/",function(req,res) {
    ListingService.prototype.update(req.body)
    .then(response => {res.send(response)})
    .catch(err => {res.status(400).send(err)})
})
// delete
router.delete("/:id",function(req,res) {
    ListingService.prototype.delete(req.params.id)
    .then(response => res.send(response))
    .catch(err => res.status(400).send(err))
})

module.exports = router;