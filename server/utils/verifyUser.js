const jwt = require('jsonwebtoken');
const users = require('../models/users');

module.exports = async function verifyUser(req, res, next) {
    const token = req.cookies.token;
    const userId = req.cookies.user_id;
    let decoded, userdata;

    if (!token) {
        console.log('not exist')
        return res.sendStatus(401);
    }

    try {
        decoded = jwt.verify(token, 'jwt-secret-key');
        userdata = await users.getUser({id: userId});
        req.userdata = userdata;
        next();
    } catch (err) {
        console.log('failed verification')
        return res.sendStatus(401);
    }

}