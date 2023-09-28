import React, { useEffect, useState } from 'react'
import { FiCheck, FiX } from "react-icons/fi";
import '../styles/ItemsTable.css';
import { MissingModal } from './MissingModal';
import { EditModal } from './EditModal';
import { useDispatch } from "react-redux";
import { updateItem } from '../redux/action';


const TableBody = (props) => {
    const data = props.data
    const green = { color: 'green' }
    const red = { color: 'red' }
    const [success, setSuccess] = useState(false)
    const [missing, setMissing] = useState(false)
    const [modalOpen, setModalOpen] = useState(false);
    const [editOpen,setOpenEdit] = useState(false);
    const [urgent, setUrgent] = useState(false);
    const [editData, setEditData] = useState({})
    console.log(editData)
    const dispatch = useDispatch();
    const colour =data.status && data.status=="Missing-Urgent"? 'red' : data.status=="Missing" ? 'orange': 'green'
    const background = {
        background:colour
    }
    let edited = false
    if(editData.price != data.price ||editData.qty != data.qty){
        edited = true
    }

    useEffect(() => {
        const newData = {
            ...data,
            status: "Missing-Urgent"
        }
        if(urgent){
           dispatch(updateItem(newData)) 
        }
        
    }, [urgent]);


    const handleButtonClick = (value) => {
        setModalOpen(false);
        setUrgent(value);
    };

    const handleEditClose = (value={}) => {
        setOpenEdit(false)
        setEditData(value);
        const newData = {
            ...data,
            price:value.price,
            qty : value.qty,
            status: "quantity and price updated"
        }
        if(edited){
           dispatch(updateItem(newData)) 
        }
    };


    const handleSuccess = () => {
        if (!missing) {
            setSuccess(true)
            let newData = {
                ...data,
                status: 'Approved'
            }
            dispatch(updateItem(newData))
        }
    }

    const handleMissing = () => {
        if (!success) {
            setModalOpen(true)
            setMissing(true)
            const newData = {
                ...data,
                status: "Missing"
            }
            dispatch(updateItem(newData))
        }

    }
    return (
        <>
            <tr>
                <td className='pname'> <img src={data.image} alt='pic' width={35} height={35} /> <div>{data.name}</div></td>
                <td className='brand'>{data.brand}</td>
                <td className='price'>${data.price} /6*1Lb</td>
                <td className='qty'>{data.qty} x 6*1Lb</td>
                <td className='total'>${data.total}</td>
                <td className='status mainStatus'>
                    <div className='leftStatus'>{data.status &&<div className='newStatus' style={background}>{data.status}</div>}</div>

                    <div className='actions'>
                        <FiCheck style={success ? green : {}} onClick={handleSuccess} />
                        <FiX style={missing ? red : {}} onClick={handleMissing} />
                        <div onClick={()=>setOpenEdit(true)}>Edit</div>
                    </div>
                </td>
            </tr>
            {modalOpen && <MissingModal
                closeModal={handleButtonClick}
                onSubmit={handleButtonClick}
                onCancel={handleButtonClick}
            >
                <p>{data.name}</p>
            </MissingModal>}
            {editOpen && <EditModal
                closeModal={handleEditClose}
                onSubmit={handleEditClose}
                onCancel={handleEditClose}
                data={data}
            />}
        </>
    )
}

export default TableBody