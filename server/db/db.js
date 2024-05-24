const {MongoClient, ServerApiVersion} = require('mongodb');
const {config} = require('../config');

const client = new MongoClient(`mongodb+srv://Kiko:${config.DB_PASSWORD}@cluster0.q63wqad.mongodb.net/`, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function start() {
    try {
        await client.connect();
        await client.db(`${config.DB_NAME}`).command({ ping: 1 });
        const database = await client.db();
        const documentInfo = await database.collection('users').findOne({});
        
        if (!documentInfo) {
            database.createCollection('users');
            database.createCollection('dictionaries');
            const users = client.db().collection('users');
            users.insertOne({
                email: 'elderlywitchy@gmail.com',
                password: 'adminshark',
                username: 'LangoShark',
                level: {
                    english: 'C1',
                    japanese: 'N1'
                },
                languages: [
                    'english',
                    'japanese'
                ]
            })
        }
        else {
            console.log('exist')
        }
    } catch (error) {
        console.error(error);
    }
}

module.exports = {start, client};