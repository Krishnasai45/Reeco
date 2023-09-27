import React, { useState } from 'react'
import { FiCheck ,FiX} from "react-icons/fi";
import '../styles/ItemsTable.css';
import { MissingModal } from './MissingModal';
import { EditModal } from './EditModal';


const TableBody = (props) => {
    const data = props.data
    const green = {color:'green'}
    const red = {color:'red'}
    const [success,setSuccess] = useState(false)
    const [missing,setMissing] = useState(false)
    const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleButtonClick = (value) => {
    setModalOpen(false);
    setMessage(value);
  };

  const handleMissing =()=>{
    if(!success){
        setModalOpen(true)
        setMissing(true)
    }

  }
    return (
        <>
        <tr>
            <td className='pname'> <img src='' alt='pic'/> <div>{data.name}</div></td>
            <td className='brand'>{data.brand}</td>
            <td className='price'>{data.price}</td>
            <td className='qty'>{data.qty}</td>
            <td className='total'>{data.total}</td>
            <td className='status mainStatus'>
                <div className='leftStatus'><div className='newStatus'>success</div></div>
                
                <div className='actions'>
                    <FiCheck style={success?green:{}} onClick={()=>{!missing && setSuccess(!success)}}/>
                    <FiX style={missing?red:{}} onClick={handleMissing}/>
                    <div>Edit</div>
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
        {/* <EditModal
            name={data.name}
        /> */}
        </>
    )
}

export default TableBody