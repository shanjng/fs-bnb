const express = require("express");
const router = express.Router();

const AuthService = require("../services/auth-service")

router.post('/login', (req,res) => {
    AuthService.prototype
        .login(req.body)
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})


router.post('/register', (req,res) => {
    AuthService.prototype
        .register(req.body)
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

module.exports = router;