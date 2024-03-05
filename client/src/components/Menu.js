import React from 'react';
import { useNavigate } from 'react-router-dom';

function Menu() {
    const navigate = useNavigate();

    function toDictionaries() {
        navigate('/dictionaries');
    }

    function toProfile() {
        navigate('/profile');
    }

    return(
        <nav className='menu'>
            <ul className='menu__list'>
                <li className='menu__list__item' onClick={toProfile}>Профіль</li>
                <li className='menu__list__item'>Рівень</li>
                <li className='menu__list__item'>Картки</li>
                <li className='menu__list__item' onClick={toDictionaries}>Словники</li>
                <li className='menu__list__item'>Друзі</li>
                <li className='menu__list__item'>Ігри</li>
            </ul>
        </nav>
    )
}

export default Menu;