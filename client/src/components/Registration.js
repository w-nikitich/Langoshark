import React, { useRef, useState } from "react";
import { useNavigate} from 'react-router-dom';
import axios from 'axios'; 
import { observer } from 'mobx-react';
import { arrayOfLanguages, levelsOfLanguages } from "../config";
import Userdata from '../store/Userdata';
import {checkEmailValidity, checkPasswordValidity} from '../utils/checkValidity';

function Registration() {
    const navigate = useNavigate();
    const languagesList = useRef(null);
    const englishRef = useRef(null);
    const japaneseRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const existingUserRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault(); 
    }

    function checkLanguage(e) {
        const newLanguage = e.target.name;

        if (e.target.checked) {
            Userdata.setLanguage(newLanguage);
        }
        else {
            if (Userdata.languages.includes(newLanguage)) {
                Userdata.removeLanguage(newLanguage)
            }
        }

        console.log(Userdata.languages);
    }
    
    function showLanguageList() {
        const listDisplayProperty = window.getComputedStyle(languagesList.current).getPropertyValue('display');

        if (listDisplayProperty == 'block') {
            languagesList.current.style.display = 'none';
        }
        else {
            languagesList.current.style.display = 'block';
        }
    }

    async function register(username, email, password, languages) {

        if (checkEmailValidity(email, emailRef.current) === true && checkPasswordValidity(password, passwordRef.current) === true) {
            (Userdata.languages).map((value, index) => {
                Userdata.setLevel(levelsOfLanguages[value][0])
            });

            const level = Userdata.level;
            // Userdata.setLevel('A1');
            await axios.post('http://localhost:3001/register', {username, email, password, level, languages})
                .then((res) =>  {navigate('/profile')})
                .catch((err) => {existingUserRef.current.style.display = 'block'});
        }
        else {
            console.log('no')
        }
    }

    return(
        <div id="registration">

            <form className="register__form" onSubmit={handleSubmit}>
                <p>Реєстрація</p>

                <span className="user--exist" ref={existingUserRef}>Користувач з такою поштою вже існує</span>
            {/* <input name="username" type="text" placeholder="Придумайте свій нікнейм" value={this.state.username} onChange={(e) => this.handleChange(e)}></input> */}
                <input name="username" type="text" placeholder="Придумайте свій нікнейм" value={Userdata.username} onChange={(e) => Userdata.setUsername(e.target.value)}></input>

                <span className={Userdata.isEmailValid ? 'valid' : 'invalid'} ref={emailRef}>
                    {/* <input name="email" type="text" placeholder="Уведіть Вашу електронну пошту" value={this.state.email} onChange={(e) => this.handleChange(e)} onBlur={() => this.checkEmailValidity(this.state.email)}/> */}
                    <input name="email" type="text" placeholder="Уведіть Вашу електронну пошту" value={Userdata.email} onChange={(e) => Userdata.setEmail(e.target.value)} onBlur={() => checkEmailValidity(Userdata.email, emailRef.current)}/>
                </span>

                <span className={Userdata.isPasswordValid ? 'valid' : 'invalid'} ref={passwordRef}>
                    {/* <input name="password" type="password" placeholder="Уведіть Ваш пароль" onChange={(e) => this.handleChange(e)} onBlur={() => this.checkPasswordValidity(this.state.password)}/> */}
                    <input name="password" type="password" placeholder="Уведіть Ваш пароль" onChange={(e) => Userdata.setPassword(e.target.value)} onBlur={() => checkPasswordValidity(Userdata.password, passwordRef.current)}/>
                </span>

                <div className="languages">
                    <div className="languages__pick" onClick={showLanguageList}>
                        <p>Оберіть мову, яку хочете вивчати</p>
                    </div>

                    <div className="languages__choice" ref={languagesList}>
                        {
                            (arrayOfLanguages).map((value, index) => {
                                const languageTranslate = value.split(':');

                                return <div className={`languages__choice--${languageTranslate[0].substring(0, 3)}`}>
                                            <input type="checkbox" id={languageTranslate[0]} name={languageTranslate[0]} ref={languageTranslate[0] === 'english' ? englishRef : japaneseRef} onChange={(e) => checkLanguage(e)}/>
                                            <label for={languageTranslate[0]}>{languageTranslate[1]}</label>                   
                                        </div>
                            })
                        }
                    </div>
                </div>

            {/* <input className="register__submit" type="submit" value='Зареєструватися' onClick={(e) => {this.register(this.state.username, this.state.email, this.state.password, this.state.languages)}}/> */}
                <input className="register__submit" type="submit" value='Зареєструватися' onClick={(e) => {register(Userdata.username, Userdata.email, Userdata.password, Userdata.languages)}}/>
            </form>
        </div>
    )
}

// const ObserverWithRouterRegistration = observer(Registration);
export default observer(Registration);;