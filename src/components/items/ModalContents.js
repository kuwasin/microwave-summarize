import React from "react";
import styled from "styled-components";
import Button from "./Button";

function ModalContents({ name, content, ToggleModal }) {
  return (
    <SOverLay
      onClick={ToggleModal}
      className=" fixed top-0 left-0 w-full h-full flex  items-center justify-center"
    >
      <div className="  z-10 w-3/6 p-8 bg-slate-50 shadow-md rounded-md flex flex-col items-center">
        <div className="mb-2 text-xl">
          <h3 className="text-2xl font-semibold"> {name}</h3>

          {content}
        </div>
        <div>
          <Button>閉じる</Button>
        </div>
      </div>
    </SOverLay>
  );
}
const SOverLay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
`;

export default ModalContents;
