import React from "react";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import axios from 'axios'; 
import Header from '../components/Header';
import shark_dialog from '../images/shark_dialog.png';

function Dictionaries() {
    const navigate = useNavigate();

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
                            <p>some dictionary</p>
                        </div>
                    </div>
                    <div className="dictionaries__list__pannel">
                        <div className="dictionaries__list__pannel__form">
                            <input className="dictionary__create__name" type="text"/>
                            <button className="dictionary__create__btn def-btn">Створити</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Dictionaries;