import React, { useRef } from "react";
import {arrayOfLanguages} from "../config";

function NewDictionary() {
    const languagesList = useRef();
    const englishRef = useRef();
    const japaneseRef = useRef();

    function checkLanguage(e) {
        
    }

    return (
        <div className="dictionary__create__wrapper">
            <p>Створити новий словник</p>

            <div className="dictionary__create__form">
                    
                <input name="name" type="text" placeholder="Назвіть свій словник"/>
                {/* language, private/public */}
                
                <div className="dictionary__create__languages">
                    <p className="dictionary__create__languages--text"></p>
                </div>

                <div className="dictionary__create__languages__list" ref={languagesList}>
                        {
                            (arrayOfLanguages).map((value, index) => {
                                const languageTranslate = value.split(':');

                                return <div className={`dictionary__create__languages--${languageTranslate[0].substring(0, 3)}`}>
                                            <input type="checkbox" id={languageTranslate[0]} name={languageTranslate[0]} ref={languageTranslate[0] === 'english' ? englishRef : japaneseRef} onChange={(e) => checkLanguage(e)}/>
                                            <label for={languageTranslate[0]}>{languageTranslate[1]}</label>                   
                                        </div>
                            })
                        }
                    </div>
            </div>
        </div>
    );
}

export default NewDictionary;