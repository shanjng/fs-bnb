const Listing = require("../models/listing-model")

module.exports = class ListingService {
    constructor() {}

    create(req) {
        return new Promise((resolve, reject) => {
            Listing.prototype.create(req)
            .then(res =>resolve(res))
            .catch(err => 
                {reject(err)}
            )
        })
    }

    get() {
        return new Promise((resolve, reject) => {
            Listing.prototype.get()
            .then(res => resolve(res))
            .catch(err => reject(err))
        })
    }
 }