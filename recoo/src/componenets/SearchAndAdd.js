import React, { useState } from 'react'
import '../styles/Search.css';

const SearchAndAdd = () => {
    return (
        <div className='search-add'>
            <div className='searchBox'>
                <div className='search'>
                    <input
                        placeholder="search..."
                        value={''}
                    />
                    <img src='https://cdn-icons-png.flaticon.com/128/8915/8915520.png' alt='search' width={25} height={25} />
                </div></div>
            <div className='add'>
                <div className='addButton'>Add Item</div>
                <img src='https://cdn-icons-png.flaticon.com/128/9363/9363759.png' width={30} height={30} alt='add' />
            </div>
        </div>
    )
}

export default SearchAndAdd