import React, {  useEffect, useState } from 'react'
import '../styles/ItemsTable.css';
import TableBody from './TableBody';
import { useSelector } from "react-redux";

const ItemsTable = () => {
    const data = useSelector((state)=>state.reducer.data)
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