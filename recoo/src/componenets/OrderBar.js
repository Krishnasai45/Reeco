import React, { useState } from 'react'
import '../styles/OrderBar.css';

const OrderBar =()=>{
    return(
        <div className='orderBar'>
            <div className='container'>
                <div className=''>
                    <div className='top'>
                        {`Orders > `} <a href='#'>Order 32457ABC</a>
                    </div>
                    <div className='bottom'>
                        <h4>Order 32457ABC</h4>
                        <div className='buttonRight'>
                            <div className='backButton'>Back</div>
                            <div className='ApproveButton'>Approve Order</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OrderBar