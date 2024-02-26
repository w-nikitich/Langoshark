const client = require('../db/db').client;
const { ObjectId } = require('mongodb');

async function setDictionary(userId, language, name, amount) {
    const dictionaries = client.db().collection('dictionaries');
    await dictionaries.insertOne({
        userId: userId,
        language: language,
        name: name,
        amount: amount
    });

    const newDictionary = await dictionaries.findOne({
        userId: userId,
        language: language,
        name: name
    });

    return newDictionary;
    
}

async function setWord(nameOfDictionary, word, wordTranslation, knowledge) {
    const dictionary = client.db().collection(nameOfDictionary);

    dictionary.insertOne({
        word:word,
        wordTranslation: wordTranslation,
        knowledge: knowledge
    });
}

async function getDictionaries(userId) {
    const dictionaries = client.db().collection('dictionaries');
    const userDictionaries = await dictionaries.find({userId: userId}).toArray();
    return userDictionaries;
}

module.exports = {setDictionary, setWord, getDictionaries}