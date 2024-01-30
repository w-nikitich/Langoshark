import {makeAutoObservable, action} from 'mobx';
import {levelsOfLanguages} from '../config';
import axios from 'axios';
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
            setLevel: action,   
            fetchUserdata: action,
            reset: action
        });
    }

    async fetchUserdata(userdata) {
        try {
            // const response = await axios.post('http://localhost:3001/userdata/', {id: userdata});
            this.setUsername(userdata.username);

            userdata.languages.forEach((element) => {
                this.setLanguage(element);
                this.setLevel();
            })
    
            // response.data.languages.forEach((element) => {
            //     this.setLevel(element, response.data.level);
            //     // this.setLevel(response.data.languages, response.data.level);
            // })
        } catch (err) {
            console.log(err);
        }

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

    setLevel() {
        this.languages.forEach((element) => {
            this.level = {... this.level, [element]: levelsOfLanguages[element][0]}
        })
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