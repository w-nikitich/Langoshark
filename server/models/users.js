const client = require('../db/db').client;

async function setUser(email, password, username, level, languages) {
    const users = client.db().collection('users');
    users.insertOne({
        email: email,
        password: password,
        username: username,
        level: level,
        languages: languages
    })
}

// not getUser, but check user data validity
async function getUser(email, password) {
    const users = client.db().collection('users');
    const userData = await users.findOne({email: email, password: password})
    // console.log(checkExisting);
    return userData;
}

async function isUserExist(email) {
    const users = client.db().collection('users');
    const checkExisting = await users.findOne({email: email});

    if (checkExisting !== null) {
        return true;
    }
    else {
        return false;
    }
}

module.exports = {setUser, getUser, isUserExist}