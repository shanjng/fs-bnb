const userService = require("./user-service");
var bycrypt = require('bcryptjs');
const User = require("../models/user-model")
var jwt = require ('jsonwebtoken');

const roles = {
    ADMIN: "admin",
    PROVIDER: "provider",
    USER: "user"
}

module.exports = class AuthService {
    constructor() {}

    async hashPassword(password){
        var salt = bycrypt.genSaltSync(10);
        var hashPass = await bycrypt.hash(password, salt);
        return hashPass;
    }

    // async getJwtToken(user, rememberUser) {
    //     let jwtObject = {}

    //     jwtObject.id = user.id;
    //     jwtObject.name = user.firstName;
    //     jwtObject.surname = user.lastName;
    //     jwtObject.cellPhone = user.cellPhone;
    //     jwtObject.email = user.email;
    //     jwtObject.role = user.role;
    //     jwtObject.remember = rememberUser;

    //     return await jwt.sign(Object.assign((), jwtObject), "secret-key", {

    //     }
    // }

    login(authUser) {
        // Get users
        // Loop through users find user by email
        // Validate the password
        // if successful return the user
        return new Promise((resolve, reject) => {
            userService.prototype.getAll()
            .then(users => {
                // const users = JSON.parse(userJSON).users;
                users.forEach(user => {
                    if (user.email == authUser.email) {
                        const match = bycrypt.compare(user.password == authUser.password)
                        if (match) {
                            resolve(user)
                        }
                    }
                })
                reject("User not found")
            })
            .catch(err => {
                console.log(err)
                reject(err);
            })
        })

    }

     register(user) {
        return new Promise((resolve, reject) => {

            User.prototype.getAll((err, data) => {
                if (err) {s
                    reject(err)
                }

                data.forEach(existingUser => {
                    if (existingUser.email == user.email) {
                        reject("This email address already has been used")
                    }
                })

                let hashPassword;
                this.hashPassword(user.password).then((hashPass) => {
                    hashPassword = hashPass;
                }).catch((err) => {
                    console.log(err)
                    reject(err)
                })

                // (async () => {
                //     hashPassword = await this.hashPassword(user.password)
                // })();

                const userObj = {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    cellPhone: user.cellPhone,
                    email: user.email,
                    password: hashPassword,
                    role: roles.USER
                }

                const newUser = new User(userObj);

                User.prototype.createUser(newUser, (err, res) => {
                    if (err) reject(err);
                    resolve(res);
                })
            })
        })
    }
}