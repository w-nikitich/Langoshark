const express = require('express');
const { default: axios } = require('axios');
const newDictionaryRouter = express.Router();
const getDictionariesRouter = express.Router();
const getProposalDictionariesRouter = express.Router();
const dictionaries = require('../models/dictionaries');
const verifyUser = require('../utils/verifyUser');
const {config} = require('../config');

newDictionaryRouter.post('/', verifyUser, async (req, res)=> {
    try {
        const userId = req.cookies.user_id;
        const newDictionary = await dictionaries.setDictionary(userId, req.body.languages, req.body.name, 0, req.body.level)
        res.send(newDictionary);
    } catch (error) {
        console.error(error)
    }
})

getDictionariesRouter.get('/', verifyUser, async (req, res) => {
    try {
        const userId = req.cookies.user_id;
        const userDictionaries = await dictionaries.getDictionaries(userId);
        res.send(userDictionaries);
    } catch (error) {
        console.error(error);
    }
})

getProposalDictionariesRouter.post('/', async (req, res) => {
    try {
        const adminId = config.ADMIN_ID;
        const proposalDictionaries = await dictionaries.getProposalDictionaries(adminId, req.body.language, req.body.level);
        console.log(req.body)
        res.send(proposalDictionaries);
    } catch (error) {
        console.error(error);
    }
})

module.exports = {newDictionaryRouter, getDictionariesRouter, getProposalDictionariesRouter}