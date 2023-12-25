const express = require('express');
const userRouter = express.Router();
const users = require('../models/users');
const { default: axios } = require('axios');

userRouter.post('/', async (req, res) => {
    try {
        const checkExisting = await users.getUser(req.body.email, req.body.password);
        console.log(req.body.email + ', also getted ' + req.body.password);
        console.log(checkExisting);
        res.send(checkExisting);
    } catch(error) {
        console.error(error);
    }
})

module.exports = userRouter;

