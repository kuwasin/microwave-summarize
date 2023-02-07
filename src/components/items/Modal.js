import React, { useState } from "react";
import { createPortal } from "react-dom";
import ModalContents from "./ModalContents";
export const Modal = ({ name ,content,id}) => {
  const [ IsOpen, SetIsOpen ] = useState(false)
  const ToggleOpen = () => {
   SetIsOpen(!IsOpen)
  }
  return (
    <>
      <div className="cursor-pointer" onClick={ToggleOpen}>{name}</div>
      {IsOpen && (

        <ModalContents content={content } />
      )}
    </>
  );
};

