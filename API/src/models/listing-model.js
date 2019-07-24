fs = require("fs");
mysqlConn = require("../data-base/data-base");

module.exports = class Listing {
    constructor(listing) {
        this.id;
        this.providerId = listing.providerId;
        this.title = listing.title;
        this.description = listing.description;
        this.rating = listing.rating;
        this.location = listing.location;
        this.pricePerNight = listing.pricePerNight;
    }

    create(req) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("INSERT INTO listing set ?", req, function(err, res) {
                if (err) {
                  reject(err)
                } else {
                  resolve(res.insertId);
                }
            })
        })    
    }
}