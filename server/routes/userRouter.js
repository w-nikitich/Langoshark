const express = require('express');
const session = require('express-session');
const { default: axios } = require('axios');
const jwt = require('jsonwebtoken');
const verifyUser = require('../utils/verifyUser');
const signInRouter = express.Router();
const profileRouter = express.Router();
const registerRouter = express.Router();
const userdataRouter = express.Router();
const signOutRouter = express.Router();
const users = require('../models/users');

signInRouter.post('/', async (req, res) => {
    try {
        const userdata = await users.getUser({email: req.body.email, password: req.body.password});

        if (userdata) {
            const token = jwt.sign({email: req.body.email}, "jwt-secret-key", {expiresIn: "1d"});
            res.cookie("token", token, {secure: true, httpOnly: true, sameSite: 'Strict'});
            res.cookie("user_id", userdata._id, {secure: true, httpOnly: true, sameSite: 'Strict'});
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

profileRouter.get('/', verifyUser, (req, res) => {
    try {
        // console.log(req);
        res.send(req.userdata)
    } catch (err) {
        console.log(err);
    }
})

registerRouter.post('/', async (req, res) => {
    try {
        const checkExisting = await users.isUserExist(req.body.email); 
        
        if (checkExisting) {
            console.log('user exists');
            res.sendStatus(409);
        }
        else {
            const newUser = await users.setUser(req.body.email, req.body.password, req.body.username, req.body.level, req.body.languages);
            const userdata = await users.getUser({email: req.body.email, password: req.body.password});
            const token = jwt.sign({email: req.body.email}, "jwt-secret-key", {expiresIn: "1d"});

            console.log(req.body.email, req.body.username, req.body.languages);

            res.cookie("token", token, {secure: true, httpOnly: true, sameSite: 'Strict'});
            res.cookie("user_id", userdata._id, {secure: true, httpOnly: true, sameSite: 'Strict'});
            res.send(userdata);
        }   
    } catch (error) {
        console.error(error);
    }
})

userdataRouter.post('/', async(req, res) => {
    try {
        const userdata = await users.getUser(req.id);
        res.send(userdata);
    }
    catch (error) {
        console.error(error);
    }
})

signOutRouter.get('/', (req, res) => {
    res.clearCookie('token', { httpOnly: true });
    res.clearCookie('user_id', { httpOnly: true });
    res.sendStatus(401);
})



module.exports = {signInRouter, profileRouter, registerRouter, userdataRouter, signOutRouter};

