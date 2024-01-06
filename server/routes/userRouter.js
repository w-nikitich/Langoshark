const express = require('express');
const signInRouter = express.Router();
const registerRouter = express.Router();
const users = require('../models/users');
const { default: axios } = require('axios');

signInRouter.post('/', async (req, res) => {
    try {
        const checkExisting = await users.getUser(req.body.email, req.body.password);
        console.log(req.body.email + ', also getted ' + req.body.password);
        console.log(checkExisting);
        res.send(checkExisting);
    } catch(error) {
        console.error(error);
    }
});

registerRouter.post('/', async (req, res) => {
    try {
        const checkExisting = await users.isUserExist(req.body.email); 
        
        if (checkExisting) {
            console.log('user exists');
        }
        else {
            const newUser = await users.setUser(req.body.email, req.body.password, req.body.username, req.body.languages);
            console.log(req.body.email, req.body.username, req.body.languages);
        }
    } catch (error) {
        console.error(error);
    }
})



module.exports = {signInRouter, registerRouter};

