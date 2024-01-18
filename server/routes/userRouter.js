const express = require('express');
const session = require('express-session');
const signInRouter = express.Router();
const registerRouter = express.Router();
const userdataRouter = express.Router();
const users = require('../models/users');
const { default: axios } = require('axios');

signInRouter.post('/', async (req, res) => {
    try {
        const userdata = await users.getUser(req.body.email, req.body.password);

        if (userdata) {
            req.session.userId = userdata._id.toString();
            console.log(req.session.userId);
            res.send(userdata);
        }
        else {
            res.sendStatus(409);
        }
        console.log(req.body.email + ', also getted ' + req.body.password);

    } catch(error) {
        console.error(error);
    }
});

registerRouter.post('/', async (req, res) => {
    try {
        const checkExisting = await users.isUserExist(req.body.email); 
        
        if (checkExisting) {
            console.log('user exists');
            res.sendStatus(409);
        }
        else {
            const newUser = await users.setUser(req.body.email, req.body.password, req.body.username, req.body.level, req.body.languages);
            console.log(req.body.email, req.body.username, req.body.languages);
            res.sendStatus(200);
        }
    } catch (error) {
        console.error(error);
    }
})

userdataRouter.post('/', async(req, res) => {
    try {
        const userdata = await users.getUser(req.body.email, req.body.password);
        res.send(userdata);
    }
    catch (error) {
        console.error(error);
    }
})



module.exports = {signInRouter, registerRouter, userdataRouter};

