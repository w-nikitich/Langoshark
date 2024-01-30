const client = require('../db/db').client;
const { ObjectId } = require('mongodb');

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
async function getUser({email, password, id}) {
    const users = client.db().collection('users');
    let userdata;

    if (!id) {
        userdata = await users.findOne({email: email, password: password})
    }
    else if (!email && !password) {
        userdata = await users.findOne({_id: new ObjectId(id)})
    }
    else {
        return null;
    }
    
    // console.log(checkExisting);
    return userdata;
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