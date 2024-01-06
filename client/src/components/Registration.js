import React from "react";
import axios from 'axios'; 

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.languagesList = React.createRef();
        this.english = React.createRef();
        this.japanese = React.createRef();
        this.arrayOfLanguages = ['english:Англійська', 'japanese:Японська']
        this.state={
            username: null,
            email: null,
            password: null,
            languages: [],
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

    checkLanguage(e) {
        if (e.target.checked) {
            this.setState((prevState) => ({
                languages: [...prevState.languages, e.target.name]
            }))

        }
        else {
            console.log(this.state.languages.includes(e.target.name))
            if (this.state.languages.includes(e.target.name)) {
                const copyArr = [...this.state.languages];
                copyArr.pop();
                this.setState({languages: copyArr});
            }
        }

        console.log(this.state.languages)
    }

    showLanguageList(){
        const listDisplayProperty = window.getComputedStyle(this.languagesList.current).getPropertyValue('display');

        if (listDisplayProperty == 'block') {
            this.languagesList.current.style.display = 'none';
        }
        else {
            this.languagesList.current.style.display = 'block';
        }
    }

    async register(username, email, password, languages) {

        if (this.checkEmailValidity(email) === true && this.checkPasswordValidity(password) === true) {
            const response = await axios.post('http://localhost:3001/register', {username, email, password, languages});
            // console.log(this.english);
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
                    
                    <input name="username" type="text" placeholder="Придумайте свій нікнейм" value={this.state.username} onChange={(e) => this.handleChange(e)}></input>

                    <span className={this.state.emailValid ? 'valid' : 'invalid'}>
                        <input name="email" type="text" placeholder="Уведіть Вашу електронну пошту" value={this.state.email} onChange={(e) => this.handleChange(e)} onBlur={() => this.checkEmailValidity(this.state.email)}/>
                    </span>

                    <span className={this.state.passwordValid ? 'valid' : 'invalid'}>
                        <input name="password" type="password" placeholder="Уведіть Ваш пароль" onChange={(e) => this.handleChange(e)} onBlur={() => this.checkPasswordValidity(this.state.password)}/>
                    </span>

                    <div className="languages">
                        <div className="languages__pick" onClick={this.showLanguageList}>
                            <p>Оберіть мову, яку хочете вивчати</p>
                        </div>

                        <div className="languages__choice" ref={this.languagesList}>
                            {
                                (this.arrayOfLanguages).map((value, index) => {
                                    const languageTranslate = value.split(':');

                                    return <div className={`languages__choice--${languageTranslate[0].substring(0, 3)}`}>
                                                <input type="checkbox" id={languageTranslate[0]} name={languageTranslate[0]} ref={this[`${languageTranslate[0]}`]} onChange={(e) => this.checkLanguage(e)}/>
                                                <label for={languageTranslate[0]}>{languageTranslate[1]}</label>                   
                                            </div>
                                })
                            }
                        </div>
                    </div>

                    <input className="register__submit" type="submit" value='Зареєструватися' onClick={(e) => {this.register(this.state.username, this.state.email, this.state.password, this.state.languages)}}/>
                </form>
            </div>
        );
    }
    
}

export default Registration;