import React from 'react';

import shopFilter from './ShopFilter.module.css';

import ShopCategories from './../ShopCategories/ShopCategories.module.css'

const ShopFilter = (props) => {
    return (
        <div className={shopFilter.wrapper}>
            <ShopCategories/>
        </div>
    );
}

export default ShopFilter;
