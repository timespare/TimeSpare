import React from "react";

const Modal = props => {
  return (
    props.open && (
      <div onClick={props.onClose} className="modal-outer-container">
        <div onClick={event => event.stopPropagation()}>{props.children}</div>
      </div>
    )
  );
};

// entire screen absolute position
// inner:width
