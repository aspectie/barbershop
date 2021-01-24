import React from 'react'

import menuButtons from './MenuButtons.module.css'

const MenuButtons = (props) => {
    return (
        <div className={menuButtons.wrapper}>
            <div className={menuButtons.cart}>cart</div>
            <div className={menuButtons.search}>search</div>
        </div>
    )
}

export default MenuButtons
