import React from "react";
import axios from 'axios'; 

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.languagesList = React.createRef();
        this.english = React.createRef();
        this.japanese = React.createRef();
        this.state={
            nickname: null,
            email: null,
            password: null,
            languages:[],
            emailValid: null,
            passwordValid: null
        }

        this.showLanguageList = this.showLanguageList.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault(); 
    }

    handleChange(e) {
        const value = e.target.value;

        this.setState({ 
            [e.target.name]: value
        })
    }

    checkEmailValidity(email) {
        try {
            const spanElem = document.getElementsByTagName('span')[0];
            const isValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);

            this.setState({emailValid: isValid});
            console.log(email);
    
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
            const spanElem = document.getElementsByTagName('span')[1];
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

    showLanguageList(){
        // const listOfLanguages = document.getElementsByClassName('languages__choice')[0];
        // const element = this.languagesList.current;
        // console.log(element)
        const listDisplayProperty = window.getComputedStyle(this.languagesList.current).getPropertyValue('display');

        // console.log(listDisplayProperty)

        if (listDisplayProperty == 'block') {
            this.languagesList.current.style.display = 'none';
        }
        else {
            this.languagesList.current.style.display = 'block';
        }
    }

    async register(nickname, email, password, languages) {
        if (this.checkEmailValidity(email) === true && this.checkPasswordValidity(password) === true) {
            const response = await axios.post('http://localhost:3001/register', {nickname, email, password, languages});
            console.log(response);
        }
        else {
            console.log('no')
        }
    }

    render() {
        return(
            <div id="registration">

                <form className="register__form" onSubmit={this.handleSubmit}>
                    <p>Реєстрація</p>
                    
                    <input name="nickname" type="text" placeholder="Придумайте свій нікнейм" value={this.state.nickname} onChange={(e) => this.handleChange(e)}></input>

                    <span className={this.state.emailValid ? 'valid' : 'invalid'}>
                        <input name="email" type="text" placeholder="Уведіть Вашу електронну пошту" value={this.state.email} onChange={(e) => this.handleChange(e)} onBlur={() => this.checkEmailValidity(this.state.email)}/>
                    </span>

                    <span className={this.state.passwordValid ? 'valid' : 'invalid'}>
                        <input name="password" type="password" placeholder="Уведіть Ваш пароль" onChange={(e) => this.handleChange(e)} onBlur={() => this.checkPasswordValidity(this.state.password)}/>
                    </span>

                    <div className="languages">
                        {/* <select name="languages__select" onClick={this.showLanguageList}>
                            <option value='default' selected disabled hidden>Оберіть мову, яку хочете вивчати</option>
                        </select> */}
                        <div className="languages__pick" onClick={this.showLanguageList}>
                            <p>Оберіть мову, яку хочете вивчати</p>
                        </div>

                        <div className="languages__choice" ref={this.languagesList}>
                            <div className="languages__choice--eng">
                                <input type="checkbox" id="english" name="english" ref={this.english}/>
                                <label for='english'>Англійська</label>                   
                            </div>
                            <div className="languages__choice--jap">
                                <input type="checkbox" id="japanese" name="japanese" ref={this.japanese}/>
                                <label for='japanese'>Японська</label>                   
                            </div>
                        </div>
                    </div>

                    <input className="register__submit" type="submit" value='Зареєструватися' onClick={(e) => {this.register(this.state.nickname, this.state.email, this.state.password, this.state.languages)}}/>
                </form>
            </div>
        );
    }
    
}

export default Registration;