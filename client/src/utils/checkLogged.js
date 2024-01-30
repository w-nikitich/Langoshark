import axios from 'axios';

export default async function checkLogged(email, password) {
    const userdata = await axios.post('http://localhost:3001/userdata/', {email: email, password: password});

    if (userdata) {
        return true;
    }
    else {
        return false;
    }
}