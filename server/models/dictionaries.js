const client = require('../db/db').client;
const { ObjectId } = require('mongodb');

async function setDictionary(userId, language, name, amount, level) {
    const dictionaries = client.db().collection('dictionaries');
    await dictionaries.insertOne({
        userId: userId,
        language: language,
        name: name,
        amount: amount,
        level: level
    });

    const newDictionary = await dictionaries.findOne({
        userId: userId,
        language: language,
        name: name
    });

    return newDictionary;
}

// nameOfDictionary ----> dictionaryId
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

async function getProposalDictionaries(adminId, language, level) {
    const dictionaries = client.db().collection('dictionaries');
    const userDictionaries = await dictionaries.find({userId: adminId, language: language, level: level}).toArray();
    console.log(language, level)
    return userDictionaries;
}

module.exports = {setDictionary, setWord, getDictionaries, getProposalDictionaries}