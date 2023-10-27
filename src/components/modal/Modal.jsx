import React from 'react';
import './Modal.styles.css';

const Modal = ({children}) => {
    return <div className="modal-body">
        <div className="modal">
            {children}
        </div>
    </div>
}

export default Modal;