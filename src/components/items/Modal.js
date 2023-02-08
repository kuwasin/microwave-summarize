import React, { useState } from "react";
import ModalContents from "./ModalContents";
export const Modal = ({ name ,content,id,image}) => {
  const [ IsOpen, SetIsOpen ] = useState(false)
  const ToggleModal = () => {
   SetIsOpen(!IsOpen)
  }
  return (
    <>
      <div className="flex pl-14 items-center    md:w-1/2 lg:w-1/3 mb-20 ">
        <div className=" inline-block px-5 rounded-full ">
          <img className="w-10" src={image} alt={name} />
        </div>
        <div
          className="text-xl font-semibold text-gray-800 cursor-pointer hover:underline  text-left"
          onClick={ToggleModal}
        >{`・${name}`}</div>
      </div>
      {IsOpen && <ModalContents name={name} content={content} ToggleModal={ToggleModal} />}
    </>
  );
};

