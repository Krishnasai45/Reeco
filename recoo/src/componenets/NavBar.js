import React, { useState } from 'react'
import '../styles/Navbar.css';

const NavBar =()=>{
    return(
        <div className='navbar'>
            <div className='container'>
                <div className='navLinks'>
                    <div className='leftTags'>
                        <ul>
                            <li>logo</li>
                            <li>Store</li>
                            <li>Order</li>
                            <li>Analitics</li>
                        </ul>
                    </div>
                    <div className='rightTags'>
                        <ul>
                            <li><img src='https://cdn-icons-png.flaticon.com/128/4647/4647563.png' alt='cart'  width={25} height={25} /></li>
                            <li><div>Hello, Sai <img src='https://cdn-icons-png.flaticon.com/128/2985/2985150.png' width={15} height={15}/> </div></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NavBar