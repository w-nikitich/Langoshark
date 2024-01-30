import React from 'react';
import axios from 'axios'; 
import { useNavigate } from "react-router-dom";
import { observer } from 'mobx-react';
import Userdata from '../store/Userdata';

function SignOut() {
    const navigate = useNavigate();

    function handleClick(e) {
        Userdata.reset();
        axios.get('http://localhost:3001/sign-out/', { withCredentials: true})
            .then((res) => {
                navigate('/');
            })
            .catch((err) => {
                if (err.response.status === 401) {
                    navigate('/');
                }
                else {
                    console.log(err)
                }
            })
    }

    return(
        <div className='sign__out'>
            <button className='sign__out__btn' onClick={(e) => handleClick(e)}>Вийти</button>
        </div>
    )
}

export default observer(SignOut);