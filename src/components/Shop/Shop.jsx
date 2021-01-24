import React from 'react';

import shop from './Shop.module.css';

import ShopFilter from './ShopFilter/ShopFilter'
import ShopItems from './ShopItems/ShopItems'

const Shop = (props) => {
    return (
        <div className={shop.wrapper}>
            <div className="container">
                <div className="pageHeader">
                    <h1 className="pageTitle">Shop</h1>
                    <p>Get the best kit for smooth shave</p>
                </div>
                <ShopFilter/>
                <ShopItems/>
            </div>
        </div>
    );
}

export default Shop;
