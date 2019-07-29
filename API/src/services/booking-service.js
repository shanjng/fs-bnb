const Booking = require("../models/booking-model")

module.exports = class BookingService {
    constructor() {}

    create(req) {
        return new Promise((resolve, reject) => {
            Booking.prototype.create(req)
            .then(res => resolve(res))
            .catch(err => reject(err))
        })
    }

    getAll() {
        return new Promise((resolve, reject) => {
            Booking.prototype.getAll()
            .then(res => resolve(res))
            .catch(err => reject(err))
        })
    }

    getByListingId(id) {
        return new Promise((resolve, reject) => {
            Booking.prototype.getByListingId(id)
            .then(res => resolve(res))
            .catch(err => reject(err))
        })
    }

    updateStatus(id, status) {
        return new Promise((resolve, reject) => {
            Booking.prototype.updateStatus(id, status.status)
            .then(res => resolve(res))
            .catch(err => reject(err))
        })
    }
}