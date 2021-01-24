import React from 'react'

import menuNav from './MenuNav.module.css';

import {NavLink} from "react-router-dom";

const MenuNav = (props) => {
    return (
        <div className={menuNav.wrapper}>
            <nav className={menuNav.nav}>
                <div className={menuNav.item}>
                    <NavLink to="/home" activeClassName={menuNav.active}>Home</NavLink>
                </div>
                <div className={menuNav.item}>
                    <NavLink to="/shop" activeClassName={menuNav.active}>Shop</NavLink>
                </div>
                <div className={menuNav.item}>
                    <NavLink to="/blog" activeClassName={menuNav.active}>Blog</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default MenuNav
