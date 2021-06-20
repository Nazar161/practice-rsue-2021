import React from 'react';
import './header.css';
import logo from './logo.svg';
import { Button } from '@material-ui/core';


const Header = () => {
    return (
        <header className="header">
            <ul className="header-list">
                <li><img src={logo} alt="logo"></img></li>
                <li>
                    <div><span className='header-rsue'>РГЭУ(РИНХ)</span></div>
                    <div><a href='https://rsue.ru/' className='header-rsue'>НА ГЛАВНЫЙ САЙТ</a></div>
                </li>
            </ul>
            <span className='header-pride'>ГОРДОСТЬ НАШЕГО УНИВЕРСИТЕТА</span>
            <Button href="https://portfolio.rsue.ru/login/index.php" variant="contained" color="secondary">
                Личный кабинет 
            </Button>

            <div className="mobile">Доска почета РГЭУ(РИНХ)</div>
        </header>
    );
};

export default Header;