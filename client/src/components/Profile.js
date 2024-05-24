import React, { useEffect, useState } from "react";
import axios from 'axios'; 
import { observer } from 'mobx-react';
import { useNavigate } from "react-router-dom";
import { toJS } from 'mobx';
import { arrayOfLanguages } from "../config";
import Userdata from "../store/Userdata";
import Header from "./Header";
import Container from "react-bootstrap/esm/Container";
import plus_icon from '../images/plus_icon.png';
import settings_icon from '../images/settings_icon.png';
import NewDictionary from "./NewDictionary";
import DictionaryList from "./DictionaryList";

function Profile({store}) {
    const navigate = useNavigate();
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3001/profile/', { withCredentials: true})
            .then(res => {
                store.fetchUserdata(res.data);
            })
            .catch((error) => { 
                console.log(error)
                navigate('/');
            })
    }, [])

    function handleState(isShown) {
        setIsShown(isShown);
    }

    return(
        <div id="profile">
            { isShown ? <NewDictionary isShown={handleState}/> : null }
            <Header/>
            <Container>
                <div className="profile__basic__info">
                    <div className="profile__basic__info__avatar">
                        <img className="profile__avatar" src={store.avatar}/>
                        <label className="profile__avatar__change">
                            <input className="profile__avatar__change file__input" type="file" accept=".png, .jpg, .jpeg, .gif"/>
                            <img className="profile__avatar__chang icon" src={settings_icon}/>
                        </label>                
                        
                        {/* change avatar icon */}
                    </div>
                    <div className="profile__basic__info--userdata">
                        <p className="profile__username">{store.username}</p>
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

                                        if (store.languages.includes(languageNameEN)) {
                                            myLanguages = languageNameUA; 
                                            

                                            if (store.level.hasOwnProperty(languageNameEN)) {
                                                myLanguageLevel = toJS(store.level[languageNameEN])
                                            }

                                            console.log(toJS(store.level));
                                            
                                        }
                                        else {

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

                                        <button className="profile__dictionaries__add" onClick={() => {handleState(true)}}>
                                            <img src={plus_icon}/>
                                        </button>
                                    </div>
                                    

                                    <DictionaryList />
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