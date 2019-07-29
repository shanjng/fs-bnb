// models folder is for all database models
fs = require("fs");
mysqlConn = require("../data-base/data-base");

const roles =  {
  ADMIN: "admin",
  PROVIDER: "provider",
  USER: "user"
}

module.exports = class User {
  constructor(user) { 
    this.id;
    this.firstName = user.firstName,
    this.lastName = user.lastName,
    this.cellPhone = user.cellPhone,
    this.email = user.email,
    this.password = user.password,
    this.role = user.role;
  }

  getAll(result) {
    mysqlConn.query("Select * from user", function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    });
  }

  getById(id, result) {
    mysqlConn.query("Select * from user where id = " + id, (err, res) => {
      if (err) {
        console.log("error: ", err)
        result(err, null)
      }
      else {
        result(null, res[0])
      }
    }) 
  }

  createUser(newUser, result) {
    console.log("new user: ", newUser)
    mysqlConn.query("INSERT INTO user set ?", newUser, function(err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    });
  }

  getUsersJSON() {
    return new Promise((resolve,reject) => {
      fs.readFile('./src/data/data.json', (err,data) => {
        // changes it back to a JSON due to fs.readFile making it a buffer
        if(err) {
          reject(err);
        }
        else {
          resolve(data);
        }
      });
    })
  }

  createUserJSON(AuthUser) {
    return new Promise((resolve,reject) => {
      fs.readFile('./src/data/data.json', (err,data) => {
        if(err) {
          reject(err);
        }
        else {
          // converts string into JSON
          let users = JSON.parse(data).users;
          // updates the users list/array with the new user info
          users.push(AuthUser);
          // Converts it back to a string
          let userJSON = JSON.stringify(users);
          fs.writeFile("./src/data/data.json", userJSON, (err) => {
            if(err) {
              reject(err);
            }
            else {
              resolve(users);
            }
          })
        }
      })
    })
  }
}