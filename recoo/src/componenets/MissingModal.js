import React from "react";
import { FiX } from "react-icons/fi";
import "../styles/Modal.css";

export const MissingModal = ({ onSubmit, onCancel, closeModal, children }) => {
    return (
        <div
            className="modal-container"
            // onClick={(e) => {
            //     if (e.target.className === "modal-container")
            //         closeModal(false);
            // }}
        >
            <div className="modal">
                <div className="modal-header">
                    <h4>Missing Product</h4>
                    <div onClick={() => closeModal(false)} className="close"><FiX /></div>
                </div>
                <div className="modal-content">{children}</div>
                <div className="modal-footer">
                    <div onClick={() => onSubmit(false)}>
                        <b>No</b>
                    </div>
                    <div onClick={() => onCancel(true)}>
                        <b>Yes</b>
                    </div>
                </div>
            </div>
        </div>
    );
};