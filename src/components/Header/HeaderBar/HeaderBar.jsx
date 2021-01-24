import React from 'react'

import {NavLink} from "react-router-dom"

import  headerBar from "./HeaderBar.module.css"

//import logo from '/logo-dark.png';

const HeaderBar = (props) => {
    return (
        <div className={headerBar.wrapper}>
            <div className="logotype">
                <div className="logoLink">
                    <img src={process.env.PUBLIC_URL + "/assets/images/logo-dark.png"} alt="Logotype"/>
                </div>
                {/*<img src={logo} alt="Logotype" />*/}
            </div>
        </div>
    )
}

export default HeaderBar
