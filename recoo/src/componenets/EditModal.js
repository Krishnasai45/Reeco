import React, { useState } from "react";
import { FiX,FiMinusCircle,FiPlusCircle } from "react-icons/fi";
import "../styles/EditModal.css";

export const EditModal = ({ onSubmit, onCancel, closeModal, children,data}) => {
    const [total,setTotal] = useState(data.total)
    const [qty,setQty] = useState(data.qty)
    const [price,setPrice] = useState(data.price)

    const handlePrice=(e)=>{
        setPrice(e.target.value)
    }

    const handleQtyIncress=()=>{
        if(qty>=0){
            setQty(qty+1)
        }
    }
    const handleQtyDecc=()=>{
        if(qty>0){
            setQty(qty-1)
        }
    }

    const handleSubmit =()=>{
        const chnageData = {
            price : price,
            qty : qty
        }
        onSubmit(chnageData)
    }

    return (
        <div
            className="editModal-container"
            onClick={(e) => {
                if (e.target.className === "editModal-container")
                    closeModal();
            }}
        >
            <div className="editModal">
                <div className="editModal-header">
                    <div onClick={() => closeModal("Modal was closed")} className="close"><FiX /></div>
                </div>
                <div style={{clear:'both'}}></div>
                <p><b>{data.name}</b></p>
                <div className="editModal-content">
                    <img src={data.image} alt="" width={100} height={100}/>
                    <div className="editRight">
                        <div className="editables">
                            <p>Price's</p>
                            <input type="text" name="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                        </div>
                        <div className="editablesQty">
                            <p>Quantity</p>
                            {/* <div> */}
                            <FiMinusCircle className="minus" onClick={handleQtyDecc}/>
                            <input type="text" name="qty" value={qty}/>
                            <FiPlusCircle className="plus" onClick={handleQtyIncress}/>
                            {/* </div> */}
                        </div>
                        <div className="editables">
                            <p>total</p>
                            <span>${total}</span>
                        </div>
                    </div>

                </div>
                <div className="editModal-footer">
                    <div className="cancle" onClick={() => onCancel()}>
                        <b>Cancle</b>
                    </div>
                    <div className="send" onClick={handleSubmit}>
                        <b>Send</b>
                    </div>
                </div>
            </div>
        </div>
    );
};