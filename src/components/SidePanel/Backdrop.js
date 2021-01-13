import React from "react";

const Backdrop = ({ showBackdrop, handleClick }) =>
  showBackdrop ? <div className="backdrop" onClick={handleClick}></div> : null;

export default Backdrop;
