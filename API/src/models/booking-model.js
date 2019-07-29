fs = require("fs");
mysqlConn = require("../data-base/data-base");

module.exports = class Booking {
    constructor(booking) {
        this.id;
        this.dateFrom = booking.dateFrom;
        this.dateTo = booking.dateTo;
        this.userId = booking.userId;
        this.listingId = booking.listingId;
        this.status;
    }

    create(req) {
        return new Promise((resolve, reject) => {
            let booking = new Booking(req)
            booking.status = "NEW"
            mysqlConn.query("INSERT INTO booking set ?", booking, function(err, res){
                if (err) reject(err) 
                else {
                    resolve(booking)
                }
            })
        })    
    }

    getAll() {
        return new Promise((resolve, reject) => {
            mysqlConn.query("SELECT * FROM booking", (err, res) => {
            if (err) reject(err)
            else resolve(res)
            })
        })
    }

    getByListingId (id) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("SELECT * FROM booking WHERE listingId = ?", id, function(err, res){
                if (err) reject(err) 
                else {
                    resolve(res)
                }
            })
        })    
    }

    updateStatus(id, status) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("UPDATE booking SET status = ? WHERE id = ?", [status, id], (err, res) =>{
                if (err) reject(err) 
                else {
                    resolve(res)
                }
            })
        })
    }
}