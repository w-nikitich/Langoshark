import React, { useState } from "react";
import axios from 'axios'; 
import { observer } from 'mobx-react';
import { arrayOfLanguages } from "../config";
import Userdata from "../store/Userdata";
import Header from "./Header";
import Container from "react-bootstrap/esm/Container";

function Profile() {
    console.log();
    return(
        <div id="profile">
            <Header/>
            <Container>
                <div className="profile__basic__info">
                    <div className="profile__basic__info--avatar">
                        <img className="profile__avatar" src={Userdata.avatar}/>

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

                                    {(arrayOfLanguages).map((value, index) => {
                                        const languageTranslate = value.split(':');
                                        const languageNameEN = languageTranslate[0];
                                        const languageNameUA = languageTranslate[1];
                                        let myLanguages = null;
                                        let myLanguageLevel = null;
                                        // let levelObjData = Object.getOwnPropertyDescriptor(Userdata.level, languageNameEN);
                                        
                                        if (Userdata.languages.includes(languageNameEN)) {
                                            myLanguages = languageNameUA; 
                                            
                                            // if (Userdata.level.hasOwnProperty(languageNameEN)) {
                                            //     myLanguageLevel = Userdata.level.
                                            // }

                                            // console.log(levelObjData.value);
                                            myLanguageLevel = Userdata.level[languageNameEN];
                                            console.log(myLanguageLevel);
                                        }

                                        return(
                                            <li key={languageNameEN} className="profile__languages__item">
                                                <p>{myLanguages}</p>
                                                
                                                {/* <p>{Userdata.level}</p> */}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            <div className="profile__dictionaries">
                                <ul className="profile__dictionaries__list">
                                    <p>Мої словники:</p>

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