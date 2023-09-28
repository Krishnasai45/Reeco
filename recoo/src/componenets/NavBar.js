import React, { useState } from 'react'
import '../styles/Navbar.css';
import {FiChevronDown,FiPrinter} from "react-icons/fi";

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
                            <li><div>Hello, Sai <FiChevronDown/> </div></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NavBar