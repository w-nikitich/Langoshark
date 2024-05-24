import {makeAutoObservable, action} from 'mobx';
import axios from 'axios'; 
import {levelsOfLanguages} from '../config';
import empty_avatar from '../images/empty_avatar.jpg';

class Userdata {
    username = null;
    email = null;
    password = null;
    languages = [];
    level = {};
    isEmailValid = false;
    isPasswordValid = false;
    avatar = empty_avatar;

    constructor() {
        makeAutoObservable(this, {
            setUsername: action,
            setEmail: action,
            setPassword: action,
            setLanguage: action,
            removeLanguage: action,
            setDefLevel: action,   
            setLevel: action,  
            fetchUserdata: action,
            reset: action
        });
    }

    // async fetchUserdata(userdata) {
    //     try {
    //         this.setUsername(userdata.username);

    //         userdata.languages.forEach((element) => {
    //             this.setLanguage(element);
    //             if (Object.keys(userdata.level).length === 0) {
    //                 this.setDefLevel();
    //             }
    //             else {
    //                 this.setLevel(element, userdata.level[element])
    //             }
    //         })
    //     } catch (err) {
    //         console.log(err);
    //     }

    // }

    async fetchUserdata(userdata) {
        this.setUsername(userdata.username);

        userdata.languages.forEach((element) => {
            this.setLanguage(element);
            if (Object.keys(userdata.level).length === 0) {
                this.setDefLevel();
            }
            else {
                this.setLevel(element, userdata.level[element])
            }
        })
    }

    setUsername(username) {
        this.username = username;
    }

    setEmail(email) {
        this.email = email;
    }

    setPassword(password) {
        this.password = password;
    }

    setLanguage(language) {
        this.languages.push(language);
    }

    removeLanguage(language) {
        this.languages = this.languages.filter(item => item!== language)
    }

    setEmailValidity(isValid) {
        this.isEmailValid = isValid;
    }

    setPasswordlValidity(isValid) {
        this.isPasswordValid = isValid;
    }

    setAvatar(avatar_path) {
        this.avatar = avatar_path;
    }

    setDefLevel() {
        this.languages.forEach((element) => {
            this.level = {... this.level, [element]: levelsOfLanguages[element][0]}
        })
    }

    setLevel(language, level) {
        this.level = {... this.level, [language]: level}
    }

    reset() {
        this.username = null;
        this.email = null;
        this.password = null;
        this.languages = [];
        this.level = {};
        this.isEmailValid = false;
        this.isPasswordValid = false;
        this.avatar = empty_avatar;
    }
}

export default new Userdata();