const express = require("express");
const router = express.Router();
const BookingService = require('../services/booking-service');

// creates a new bookings request
router.post("/", (req, res) => {
    BookingService.prototype.create(req.body)
    .then(response => {
    res.send(response)})
    .catch(err => res.status(400).send(err))
})

router.get("/", (req, res) => {
    BookingService.prototype.getAll()
    .then(response => res.send(response))
    .catch(err => res.status(400).send(err))
})

router.get("/listingId/:id", (req, res) => {
    BookingService.prototype.getByListingId(req.params.id)
    .then(response => res.send(response))
    .catch(err => res.status(400).send(err))
})

router.patch("/:id", (req, res) => {
    BookingService.prototype.updateStatus(req.params.id, req.body)
    .then(response => res.send(response))
    .catch(err => res.status(400).send(err))
})

module.exports = router;