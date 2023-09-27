import React, { useState } from 'react'
import '../styles/Products.css';
import SearchAndAdd from './SearchAndAdd';
import ItemsTable from './ItemsTable';

const Products = () => {
    return (
        <div className='products'>
            <SearchAndAdd/>
            <ItemsTable/>
        </div>
    )
}

export default Products