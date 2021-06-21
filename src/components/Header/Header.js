import React from 'react';
import './header.css';
import logo from './logo.svg';


const Header = () => {
    return (
        <header className="header">
            <ul className="header-list">
                <li><img src={logo} alt="logo"></img></li>
                <li className="rsue-main">
                    <div><span className='header-rsue'>РГЭУ(РИНХ)</span></div>
                    <div><a href='https://rsue.ru/' className='header-rsue'>НА ГЛАВНЫЙ САЙТ</a></div>
                </li>
            </ul>
            <span className='header-pride'>ГОРДОСТЬ НАШЕГО УНИВЕРСИТЕТА</span>
            <a href='https://portfolio.rsue.ru/login/index.php' className='personal-area-btn'>
                Личный кабинет
            </a>
            {/* <Button className='personal-area-btn' href="https://portfolio.rsue.ru/login/index.php" variant="contained" color="secondary">
                Личный кабинет 
            </Button> */}
        </header>
    );
};

export default Header;