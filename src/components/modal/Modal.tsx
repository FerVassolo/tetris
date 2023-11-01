import React from "react";
import "./Modal.styles.css";

type ModalProps = {
  children: React.ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  return (
    <div className="modal-body">
      <div className="modal">{children}</div>
    </div>
  );
};

export default Modal;
