const User = require("../models/user-model");

module.exports = class UserService {
  constructor() {}

  getAll() {
    return new Promise((resolve, reject) => {
      User.prototype
        .getAll((err, res) => {
            if (err) {
              reject(err);
            }
              resolve(res);
        });
    });
  }

  getById(id) {
    return new Promise((resolve, reject) =>{
      User.prototype
      .getById(id, (err, res)=> {
        if(err) reject(err)
        else resolve(res)
      })
    })
  }
}