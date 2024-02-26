import React, { useEffect} from "react";
import axios from 'axios'; 
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import UserDictionariesData from "../store/UserDictionariesData";

function DictionaryList() {

    useEffect(() => {
        // UserDictionariesData.reset()
        axios.get('http://localhost:3001/dictionaries/', {withCredentials: true})
            .then(res => {
                const dictionaries = res.data;
                const newDictionary = dictionaries.map((element) => ({
                    name: element.name,
                    languages: element.language,
                    amount: element.amount
                }))

                UserDictionariesData.setDictionary(newDictionary);
                // dictionaries.forEach((element, index) => {
                //     const newDictionary = {
                //         name: element.name,
                //         languages: element.language,
                //         amount: element.amount
                //     }
                //     UserDictionariesData.setDictionary(newDictionary);
                    
                // });
                console.log(toJS(UserDictionariesData.dictionaries))

            // UserDictionariesData.setDictionary(res)
            })
            .catch(eror => {
                console.error(eror)
            })
    }, [])

    return(
        <div className="dictionary__list">
            {
                UserDictionariesData.dictionaries.map((element) => {
                    return(
                        <div>
                            <p>{element.name}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default observer(DictionaryList);