const client = require('../db/db').client;

async function setUser(email, password) {
    const users = client.db().collection('users');
    users.insertOne({
        email: email,
        password: password,
        username: 'Username',
        level: null,
        language: null
    })
}

async function getUser(email, password) {
    const users = client.db().collection('users');
    const checkExisting = await users.findOne({email: email, password: password})
    console.log(checkExisting);

    if (checkExisting !== null) {
        return true;
    }
    else {
        return false;
    }
}

module.exports = {setUser, getUser}