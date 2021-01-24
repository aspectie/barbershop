import React from 'react'

import menu from './Menu.module.css';

import MenuNav from './MenuNav/MenuNav';
import MenuButtons from './MenuButtons/MenuButtons';

const Menu = (props) => {
    return (
        <div className = {menu.wrapper}>
            <MenuNav />
            <MenuButtons />
        </div>
    )
}

export default Menu
