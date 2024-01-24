import React, { useEffect, useState } from "react";
import axios from 'axios'; 
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import { arrayOfLanguages } from "../config";
import Userdata from "../store/Userdata";
import Header from "./Header";
import Container from "react-bootstrap/esm/Container";
import plus_icon from '../images/plus_icon.png';
import settings_icon from '../images/settings_icon.png';

function Profile() {


    return(
        <div id="profile">
            <Header/>
            <Container>
                <div className="profile__basic__info">
                    <div className="profile__basic__info__avatar">
                        <img className="profile__avatar" src={Userdata.avatar}/>
                        <label className="profile__avatar__change">
                            <input className="profile__avatar__change file__input" type="file" accept=".png, .jpg, .jpeg, .gif"/>
                            <img className="profile__avatar__chang icon" src={settings_icon}/>
                        </label>                
                        
                        {/* change avatar icon */}
                    </div>

                    <div className="profile__basic__info--userdata">
                        <p className="profile__username">{Userdata.username}</p>
                        {/* znachok time */}
                        <div className="profile__achievements">

                        </div>

                        <div className="profile__learning__info">
                            <div className="profile__languages">
                                <ul className="profile__languages__list">
                                    <p>Вивчаю:</p>
                                   
                                    {arrayOfLanguages.map((value) => {
                                        const languageTranslate = value.split(':');
                                        const languageNameEN = languageTranslate[0];
                                        const languageNameUA = languageTranslate[1];
                                        let myLanguages = null;
                                        let myLanguageLevel = null;

                                        if (Userdata.languages.includes(languageNameEN)) {
                                            myLanguages = languageNameUA; 
                                            

                                            if (Userdata.level.hasOwnProperty(languageNameEN)) {
                                                myLanguageLevel = toJS(Userdata.level[languageNameEN])
                                            }


                                            // // console.log(levelObjData.value);
                                            // myLanguageLevel = Userdata.level[languageNameEN];
                                            console.log(toJS(Userdata.level));
                                            
                                        }
                                        else {
                                            // console.log(Userdata.languages);
                                        }

                                        return(
                                            <li key={languageNameEN} className="profile__languages__item">
                                                <p className="profile__languages__text">{myLanguages}</p>
                                                <p className="profile__languages__level">{myLanguageLevel}</p>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            <div className="profile__dictionaries">
                                <ul className="profile__dictionaries__list">
                                    <div className="profile__dictionaries__top">
                                        <p className="profile__dictionaries__text">Мої словники:</p>

                                        <button className="profile__dictionaries__add">
                                            <img src={plus_icon}/>
                                        </button>
                                    </div>
                                    {/* <li></li> */}


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            {/* image, username, list of languages, list of dictionaries */}
        </div>
    )
}

export default observer(Profile);