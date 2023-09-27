import React from "react";
import { FiX } from "react-icons/fi";
import "../styles/EditModal.css";

export const EditModal = ({ onSubmit, onCancel, closeModal, children,name }) => {
    return (
        <div
            className="editModal-container"
            onClick={(e) => {
                if (e.target.className === "editModal-container")
                    closeModal("Modal was closed");
            }}
        >
            <div className="editModal">
                <div className="editModal-header">
                    <div onClick={() => closeModal("Modal was closed")} className="close"><FiX /></div>
                </div>
                <div style={{clear:'both'}}></div>
                <p><b>{name}</b></p>
                <div className="editModal-content">
                    <img src="" alt="" width={100} height={100}/>
                    <div className="editRight">
                        <div className="editables">
                            <p>Price's</p>
                            <input type="text" name="price" value={9999}/>
                        </div>
                        <div className="editables">
                            <p>Quantity</p>
                            <input type="text" name="qty" value={9999}/>
                        </div>
                        <div className="editables">
                            <p>total</p>
                            <span>$99999.99</span>
                        </div>
                    </div>

                </div>
                <div className="editModal-footer">
                    <div className="cancle" onClick={() => onSubmit("Submit button was clicked")}>
                        <b>Cancle</b>
                    </div>
                    <div className="send" onClick={() => onCancel("Cancel button was clicked")}>
                        <b>Send</b>
                    </div>
                </div>
            </div>
        </div>
    );
};