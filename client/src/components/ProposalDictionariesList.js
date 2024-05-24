import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; 
import { observer } from 'mobx-react';

function ProposalDictionariesList({store}) {
    const [dictionaries, setDictionaries] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:3001/proposal-dictionaries/', {language: store.languages[0], level: store.level[store.languages[0]]})
            .then(res => {
                setDictionaries(res.data)
            })
    }, []);

    return (
        <div className="dictionary__list">
            {
                dictionaries.map((element) => {
                    return(
                        <div className="dictionary__list__item">
                            <p className="dictionary__list__name">{element.name}</p>
                            <p className="dictionary__list__amount">{element.amount}</p>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default observer(ProposalDictionariesList);