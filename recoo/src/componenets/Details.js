import React, { useState } from 'react'
import '../styles/Details.css';
import Products from './Products';

const Details =()=>{
    return(
            <div className='container'>
                <div className='details'>
                    <div className='boxes left'>supplies <h4 className='text'>East Cost fruits & vegetables</h4></div>
                    <div className='break'></div>
                    <div className='boxes'>Shipping Date <h4 className='text'>Tus,Feb 10</h4></div>
                    <div className='break'></div>
                    <div className='boxes'>Ttal <h4 className='text'>$15000.0</h4></div>
                    <div className='break'></div>
                    <div className='boxes'>Catogories <h4 className='text'>EastCost fruits & vegetables</h4></div>
                    <div className='break'></div>
                    <div className='boxes'>Department <h4 className='text'>300-444-678</h4></div>
                    <div className='break'></div>
                    <div className='boxes right'>Status <h4 className='text'>Awating your Approvel</h4></div>
                </div>
                <Products/>
            </div>
    )
}

export default Details