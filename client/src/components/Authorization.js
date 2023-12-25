import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

class Authorization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailValid: null,
            passwordValid: null
        }
    }

    checkEmailValidity(email) {
        // /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        try {
            const spanElem = document.getElementsByTagName('span')[1];
            const isValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);

            this.setState({emailValid: isValid});
    
            if (!isValid && spanElem.classList.contains('invalid')) {
               spanElem.setAttribute('beforeContent', 'Невірно введена електронна пошта');
            }
    
            return isValid;

        } catch (e) {
            console.error(e);
        }
    }

    checkPasswordValidity(password) {
        try {
            const spanElem = document.getElementsByTagName('span')[2];
            const isValid = /^[\w-\.]{9,}$/g.test(password);

            this.setState({passwordValid: isValid});
    
            if (!isValid && password.length < 9 && spanElem.classList.contains('invalid')) {
                spanElem.setAttribute('beforeContent', 'Пароль має містити мінімум 9 символів')
            }
            else if (!isValid && password.length >= 9) {
                spanElem.setAttribute('beforeContent', 'Пароль містить неприпустимі символи')
            }
    
            return isValid;
        } catch (e) {
            console.error(e);
        }
    }

    handleChange(e) {
        const value = e.target.value;

        this.setState({ 
            [e.target.name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        
        
    }

    async signIn(email, password) {
        const spanElem = document.getElementsByTagName('span')[0];

        if (this.checkEmailValidity(email) === true && this.checkPasswordValidity(password) === true) {

            const response = await axios.post(`http://localhost:3001/sign-in/`, {email: email, password: password});
            
            console.log(response);

            if (!response.data) {
                spanElem.style.display = 'block';
            }
            else {
                // Увійти
            }  
        }
        else {
            
        }
    }

    async signUp() {
        
    }

    render() {
        return(
            <div className="auth">
                <div className="auth__wrapper">
                    <p>Увійти або зареєструватися</p>
                    <span className='not-exist'></span>

                    <form className="auth__form" onSubmit={this.handleSubmit}>       
                        <span className={this.state.emailValid ? 'valid' : 'invalid'}>
                        <input name='email' type="text" placeholder="Уведіть Вашу електронну пошту" value={this.state.email} onChange={(e) => this.handleChange(e)} onBlur={() => this.checkEmailValidity(this.state.email)}/>
                        </span>
                    
                        <span className={this.state.passwordValid ? 'valid' : 'invalid'}>
                        <input name="password" type="password" placeholder="Уведіть Ваш пароль" onChange={(e) => this.handleChange(e)} onBlur={() => this.checkPasswordValidity(this.state.password)}/>
                        </span>

                        <input className="auth__sign--in" type="submit" onClick={(e) => {this.signIn(this.state.email, this.state.password)}} value='Увійти'/>
                        <Link to='/registration'>
                            <input className='auth__sign--up' type="submit" formaction='http://localhost:3001/sign-up' value='Зареєструватися'/>
                        </Link>
                    </form>
                </div>
            </div>
        );
    }

}

export default Authorization;