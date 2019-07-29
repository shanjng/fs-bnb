fs = require("fs");
mysqlConn = require("../data-base/data-base");

module.exports = class Listing {
    constructor(listing) {
        this.id = listing.id;
        this.providerId = listing.providerId;
        this.title = listing.title;
        this.description = listing.description;
        this.rating = listing.rating;
        this.location = listing.location;
        this.pricePerNight = listing.pricePerNight;
        this.imgUrl;
    }

    create(req) {
        return new Promise((resolve, reject) => {
            let listing = new Listing(req)
            mysqlConn.query("INSERT INTO listing set ?", req, function(err, res){if (err) { reject(err) } 
            resolve(res.insertId)} )
        })    
    }

    addImgUrl(req) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("INSERT INTO listing_imgurl_mapping set ?", req, function(err, res){if (err) { reject(err) } resolve(res)} )
        })  
    }


    getImgUrl(listingId) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("SELECT imgUrl from listing_imgurl_mapping where listingId = " + listingId, (err, res) => {
                if(err) reject(err)
                if(res.length) resolve(res[0].imgUrl)
                else resolve('')
            })
        })
    }

    getAll() {
        return new Promise((resolve, reject) => {
            mysqlConn.query("SELECT * FROM listing", function(err, res) {
                if (err) { reject(err) } 
                else  {
                    // res.forEach(element => {
                    //     this.getImgUrl(element.id)
                    //     .then(res => (element.imgUrl = res))
                    // });
                    resolve(res)
                }
            })
        })   
    }

    getById(id) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("SELECT * from listing where id = " + id, (err, res) => {
                if(err) reject(err)
                let listing = new Listing(res[0])
                this.getImgUrl(listing.id)
                .then(imgUrl => {
                    listing.imgUrl = imgUrl;
                    resolve(listing)
                })
                .catch(err => reject(err))
            })
        })
    }

    getByProviderId(id) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("SELECT * from listing where providerId = " + id, (err, res) => {
                if(err) reject(err)
                // var listings = []
                // res.forEach(match =>
                //     {
                //         let listing = new Listing(match)
                //         this.getImgUrl(match.id)
                //         .then(imgUrl => {
                //             listing.imgUrl = imgUrl;
                //             listings.push(listing)
                //         })
                //         .catch(err => reject(err))
                //     }
                // )
                resolve(res)
            })
        })
    }

    update(req) {
        return new Promise((resolve, reject) => {
            let sql = `UPDATE listing
            SET title = ?,
             location = ?,
             rating = ?,
             description = ?,
             pricePerNight = ?
            WHERE id = ?`
 
            let data = [req.title, req.location, req.rating, req.description, req.pricePerNight, req.id];
            
            mysqlConn.query(sql, data, (err, results) => {
                if (err){
                    reject(err);
                }
            });
            mysqlConn.query("UPDATE listing_imgurl_mapping SET imgUrl = ? WHERE listingId = ?", [req.imgUrl, req.id], (err, results) => {
                if(err) reject (err)
                resolve(req)
            })
        })
    }

    deleteImgUrl(id) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("DELETE FROM listing_imgurl_mapping WHERE listingId = " + id, (err, res) => {
                if (err) reject (err)
                resolve(res)
            })
        })
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            this.deleteImgUrl(id)
                .then(res => {
                    mysqlConn.query("DELETE FROM listing WHERE id = " + id, (err, res) => {
                        if(err) reject(err)
                        resolve(res)
                    })   
                })
                .catch(err => reject(err))
        })
    }
}