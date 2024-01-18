import Userdata from "../store/Userdata";

export const checkEmailValidity = (email, ref) => {
    try {
        // const spanElem = document.getElementsByTagName('span')[0];
        const isValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);

        Userdata.setEmailValidity(isValid);
        console.log(Userdata.isEmailValid)
        // if (!isValid && spanElem.classList.contains('invalid')) {
        //    spanElem.setAttribute('beforeContent', 'Невірно введена електронна пошта');
        // }

        if (!isValid && ref.classList.contains('invalid')) {
           ref.setAttribute('beforeContent', 'Невірно введена електронна пошта');
        }
        
        return isValid;

    } catch (e) {
        console.error(e);
    }
}

export const checkPasswordValidity = (password, ref) => {
    try {
        // const spanElem = document.getElementsByTagName('span')[1];
        const isValid = /^[\w-\.]{9,}$/g.test(password);

        Userdata.setPasswordlValidity(isValid);


        if (!isValid && password.length < 9 && ref.classList.contains('invalid')) {
            ref.setAttribute('beforeContent', 'Пароль має містити мінімум 9 символів')
        }
        else if (!isValid && password.length >= 9) {
            ref.setAttribute('beforeContent', 'Пароль містить неприпустимі символи')
        }

        return isValid;
    } catch (e) {
        console.error(e);
    }
}