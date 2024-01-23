import React from 'react';

function Menu() {
    return(
        <nav className='menu'>
            <ul className='menu__list'>
                <li className='menu__list__item'>Рівень</li>
                <li className='menu__list__item'>Картки</li>
                <li className='menu__list__item'>Словники</li>
                <li className='menu__list__item'>Друзі</li>
                <li className='menu__list__item'>Ігри</li>
            </ul>
        </nav>
    )
}

export default Menu;