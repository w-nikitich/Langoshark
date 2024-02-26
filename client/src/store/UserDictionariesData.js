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
        // if exist don't add
        // newDictionaries.forEach(element => {
        //     if (this.dictionaries.includes(element)) {
        //         console.log('exist')
        //         return;
        //     }
        //     else {
        //         this.dictionaries.push(element);
        //     }
        // });

        // if (this.dictionaries.includes(newDictionaries)) {
        //     console.log('exist')
        //     return;
        // }
        // else {
        //     console.log('push new')
        //     this.dictionaries.push(newDictionaries);
        // }
        // for (let key in object) {
        //     if (this.dictionaries.includes(object[key])) {
        //         return;
        //     }
        //     else {
        //         this.dictionaries.push(object);
        //     }
        // } 
    }

    setNewDictionary(newDictionary) {
        this.dictionaries.push(newDictionary);
    }

    reset() {
        this.dictionaries = [];
    }
}

export default new UserDictionariesData();