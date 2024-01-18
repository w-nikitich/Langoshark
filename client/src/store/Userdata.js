import {makeAutoObservable, action} from 'mobx';
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
            fetchUserdata: action
        });
    }

    async fetchUserdata() {
        const response = await axios.post('http://localhost:3001/userdata/', {email: this.email, password: this.password});
        this.setUsername(response.data.username);

        (response.data.languages).map((value, index) => {
            this.setLanguage(value);
        })
        this.setLevel(response.data.level);
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

    setLevel(level) {
        (this.languages).map((value, index) => {
            this.level = {... this.level, [value]: level}
        })
    }
}

export default new Userdata();