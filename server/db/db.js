const {MongoClient, ServerApiVersion} = require('mongodb');
const {config} = require('../config');

// const client = new MongoClient(`mongodb+srv://Kiko:${config.DB_PASSWORD}@cluster0.q63wqad.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

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
        // database.collection('users').deleteMany({});
        // const checkUsersCollection = database.collection('users').find().toArray().then((value) => {
        //     console.log(value.length);
        // });
        
        if (!documentInfo) {
            console.log('exist');
        }
        else {
            console.log(documentInfo)
            database.createCollection('users');
        }

        // if (checkUsersCollection.length > 0) {
        //     console.log('exist');
        // }
        // else {
        //     await client.db().createCollection('users');
        // }
        
        console.log('Є пробиття');
    } catch (error) {
        console.error(error);
    }
}

module.exports = {start, client};