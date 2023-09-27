import React, { useState } from 'react'
import '../styles/ItemsTable.css';
import TableBody from './TableBody';

const ItemsTable = () => {
    const data = [{
        name:'Chicken Breat Fillet, Boneless Mattumarinated 6 Owns Rax,invivid',
        brand:'HormelBlack labelmany',
        price:'&60.67/6*1Lb',
        qty:'0x 6*1Lb',
        total:'0'
    },
    {
        name:'Chicken Breat Fillet, Boneless Mattumarinated 6 Owns Rax,invivid',
        brand:'HormelBlack labelmany',
        price:'&60.67/6*1Lb',
        qty:'0x 6*1Lb',
        total:'0'
    },
    {
        name:'Chicken Breat Fillet, Boneless Mattumarinated 6 Owns Rax,invivid',
        brand:'HormelBlack labelmany',
        price:'&60.67/6*1Lb',
        qty:'0x 6*1Lb',
        total:'0'
    },
    {
        name:'Chicken Breat Fillet, Boneless Mattumarinated 6 Owns Rax,invivid',
        brand:'HormelBlack labelmany',
        price:'&60.67/6*1Lb',
        qty:'0x 6*1Lb',
        total:'0'
    }
]
    return (
        <div className='ItemsTable'>
            <table className='table'>
                <thead>
                    <tr>
                        <td className='pname'>Product Name</td>
                        <td className='brand'>Brand</td>
                        <td className='price'>Price</td>
                        <td className='qty'>Quantity</td>
                        <td className='total'>Total</td>
                        <td className='status'>Status</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,i)=>{
                            return(<TableBody data={item}/>)
                                
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ItemsTable