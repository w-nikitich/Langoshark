import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import axios from 'axios'; 
import Header from '../components/Header';
import shark_dialog from '../images/shark_dialog.png';
import DictionaryList from "../components/DictionaryList";
import NewDictionary from "../components/NewDictionary";
import UserDictionariesData from "../store/UserDictionariesData";
import ProposalDictionariesList from "../components/ProposalDictionariesList";

function Dictionaries({store}) {
    const navigate = useNavigate();
    const [languages, setLanguages] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {

    }, [])

    function createNewDictionary() {
        axios.post('http://localhost:3001/new-dictionary/', {languages: languages, name: name}, { withCredentials: true})
            .then(res => {          
                const dictionary = res.data;

                UserDictionariesData.setNewDictionary(dictionary);
            })
    }

    return (
        <div id="dictionaries">
            <Header/>

            <Container>
                <div className="dictionaries__block">
                    <div className="dictionaries__proposed">
                        <div className="dictionaries__proposed__title">
                            <img className="shark__dialog" src={shark_dialog}/>
                        </div>

                        <div className="dictionaries__proposed__list">
                            <ProposalDictionariesList store={store}/>
                        </div>
                    </div>
                    <div className="dictionaries__list__pannel">
                        <div className="dictionaries__list__pannel__form">
                            <input 
                                className="dictionary__create__name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />  
                            <button className="dictionary__create__btn def-btn" onClick={() => {createNewDictionary()}}>Створити</button>
                        </div>
                        <DictionaryList/>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Dictionaries;