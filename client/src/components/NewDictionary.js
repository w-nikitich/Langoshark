import React, { useEffect, useRef, useState } from "react";
import { observer } from 'mobx-react';
import axios from 'axios'; 
import {arrayOfLanguages} from "../config";
import UserDictionariesData from "../store/UserDictionariesData";
import { toJS } from "mobx";
import Userdata from "../store/Userdata";

function NewDictionary(props) {
    const newDictionaryBlock = useRef();
    const languagesList = useRef();
    const englishRef = useRef();
    const japaneseRef = useRef();
    const [isClosed, setIsClosed] = useState(false);
    const [languages, setLanguages] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        if (isClosed) {
            props.isShown(false);
        }
    }, [isClosed])

    function removeLanguage(indexOfLanguage) {
        setLanguages(prevState => (
            prevState.filter((_, index) => index !== indexOfLanguage)
        ))
    }

    function checkLanguage(e) {
        if (e.target.checked) {
            setLanguages(prevState => [...prevState,e.target.name]);
        }
        else if (languages.includes(e.target.name)) {
            languages.map((language, index) => {
                if (language == e.target.name) removeLanguage(index)
            })
        }
    }

    function createNewDictionary() {
        axios.post('http://localhost:3001/new-dictionary/', {languages: languages, name: name, level: Userdata.level[languages]}, { withCredentials: true})
            .then(res => {          
                const dictionary = res.data;

                UserDictionariesData.setNewDictionary(dictionary);
            })
        setIsClosed(true);
    }

    return (
        <div className="dictionary__create__wrapper shown" ref={newDictionaryBlock}>
            <span className="close" onClick={() => {setIsClosed(true)}}></span>
            <p className="dictionary__create__title">Створити новий словник</p>

            <div className="dictionary__create__block">
                
                <input 
                    className="dictionary__create__name"
                    name="name" type="text"
                    placeholder="Назвіть свій словник"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
                {/* language, private/public */}
                
                <div className="dictionary__create__languages">
                    <p className="dictionary__create__languages--text"></p>
                </div>

                <div className="dictionary__create__languages__list" ref={languagesList}>
                        {
                            (arrayOfLanguages).map((value, index) => {
                                const languageTranslate = value.split(':');

                                return <label className={`dictionary__create__languages--option ${languageTranslate[0].substring(0, 3)}`}>
                                        <input
                                            type="checkbox"
                                            id={languageTranslate[0]}
                                            name={languageTranslate[0]}
                                            ref={languageTranslate[0] === 'english' ? englishRef : japaneseRef}
                                            value={languageTranslate[0]}
                                            onChange={(e) => {checkLanguage(e)}}/>
                                        <p>{languageTranslate[1]}</p>
                                    </label>
                            })
                        }
                </div>
            </div>

            <button className="dictionary__create__btn" onClick={() => createNewDictionary()}>Створити</button>
        </div>
    );
}

export default observer(NewDictionary);