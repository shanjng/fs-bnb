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
        return await bycrypt.hash(password, salt);
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
                let matched = users.filter(user => {
                    return user.email == authUser.email
                })
                if (matched.length >= 1) {
                    bycrypt.compare(authUser.password, matched[0].password)
                    .then(match => {
                        if(match) resolve(matched[0])
                        else reject("Incorrect Password")
                    })
                    .catch(err =>
                        reject(err)
                    )
                }
                else {
                    reject("User not found / Incorrect email")
                }
            }
            )
            .catch(err => {
                console.log(err)
                reject(err); 
            })
        })
    }

     register(authUser) {
        return new Promise((resolve, reject) => {

            User.prototype.getAll(async (err, users) => {
                if (err) {
                    reject(err)
                }

                let matched = users.filter(existingUser =>{
                    return authUser.email == existingUser.email}
                )
                if(matched.length >= 1) {reject("This email address already has been used")}

               let hashPassword = await this.hashPassword(authUser.password)

                const userObj = {
                    firstName: authUser.firstName,
                    lastName: authUser.lastName,
                    cellPhone: authUser.cellPhone,
                    email: authUser.email,
                    password: hashPassword,
                    role: authUser.role
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