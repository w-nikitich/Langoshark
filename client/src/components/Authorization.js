import React, {useRef} from "react";
import axios from 'axios';
import { observer } from 'mobx-react';
import { Link, useNavigate } from "react-router-dom";
import {useCookies} from 'react-cookie';
import {checkEmailValidity, checkPasswordValidity} from '../utils/checkValidity';
import Userdata from '../store/Userdata';

function Authorization()  {
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const notExistingUserRef = useRef();

    axios.defaults.withCredentials = true;

    function handleSubmit(event) {
        event.preventDefault(); 
    }

    async function signIn(email, password) {
        if (checkEmailValidity(email, emailRef.current) === true && checkPasswordValidity(password, passwordRef.current) === true) {
            try {
                const userdata = await axios.post(`http://localhost:3001/sign-in/`, {email: email, password: password});
                await Userdata.fetchUserdata(userdata); 
                navigate('/profile')
            } catch (err) {
                notExistingUserRef.current.style.display = 'block';
            } 
        }
        else {
            
        }
    }

    return(
        <div className="auth">
            <div className="auth__wrapper">
                <p>Увійти або зареєструватися</p>
                <span className='not-exist' ref={notExistingUserRef}></span>

                <form className="auth__form" onSubmit={handleSubmit}>       
                    <span className={Userdata.isEmailValid ? 'valid' : 'invalid'} ref={emailRef}>
                        <input name='email' type="text" placeholder="Уведіть Вашу електронну пошту" value={Userdata.email} onChange={(e) => Userdata.setEmail(e.target.value)} onBlur={() => checkEmailValidity(Userdata.email, emailRef.current)}/>
                    </span>
                
                    <span className={Userdata.isPasswordValid ? 'valid' : 'invalid'} ref={passwordRef}>
                        <input name="password" type="password" placeholder="Уведіть Ваш пароль" onChange={(e) => Userdata.setPassword(e.target.value)} onBlur={() => checkPasswordValidity(Userdata.password, passwordRef.current)}/>
                    </span>

                    <input className="auth__sign--in" type="submit" onClick={(e) => {signIn(Userdata.email, Userdata.password)}} value='Увійти'/>
                    <Link to='/registration'>
                        <input className='auth__sign--up' type="submit" formaction='http://localhost:3001/sign-up' value='Зареєструватися'/>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default observer(Authorization);