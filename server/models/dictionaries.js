const client = require('../db/db').client;

async function setDictionary(userId, language, name, amount) {
    const dictionaries = client.db().collection('dictionaries');
    dictionaries.insertOne({
        userId: userId,
        language: language,
        name: name,
        amount: amount
    });

    client.db().createCollection(name);
    
}

async function SetWord(nameOfDictionary, word, wordTranslation, knowledge) {
    const dictionary = client.db().collection(nameOfDictionary);

    dictionary.insertOne({
        word:word,
        wordTranslation: wordTranslation,
        knowledge: knowledge
    });
}

module.exports = {setDictionary}