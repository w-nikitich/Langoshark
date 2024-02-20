import React from 'react';
import login_icon from '../images/login_icon.png';

function Login() {
    return(
        <div className='login'>
            <img src={login_icon} className='login__icon'/>
            <button className='login__btn'>Увійти</button>
        </div>
    );
}

export default Login;