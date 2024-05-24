import {makeAutoObservable, action} from 'mobx';

class UserDictionariesData {
    dictionaries = [];

    constructor() {
        makeAutoObservable(this, {
            setDictionary: action,
            reset: action,
            setNewDictionary: action
        })
    }

    setDictionary(newDictionaries) {
        this.dictionaries = newDictionaries;
    }

    setNewDictionary(newDictionary) {
        this.dictionaries.push(newDictionary);
    }

    reset() {
        this.dictionaries = [];
    }
}

export default new UserDictionariesData();