import React from 'react';

import header from './Header.module.css';

import HeaderBar from './HeaderBar/HeaderBar';
import Menu from "./Menu/Menu";

const Header = (props) => {
    return (
        <header className='header'>
            <div className="container">
                <HeaderBar />
                <Menu />
            </div>
        </header>
    );
}

export default Header;
