import React from "react";
import "./Modal.css";

const Modal = props => {
  if (!props.open) {
    return null;
  } else {
    return (
      <div onClick={props.onClose} className="modal-outer-container">
        <div
          onClick={event => event.stopPropagation()}
          className="modal-inner-container"
        >
          <header className="modal-header">Log in </header>
          {props.children}
        </div>
      </div>
    );
  }
};

export default Modal;
// entire screen absolute position
// inner:width
