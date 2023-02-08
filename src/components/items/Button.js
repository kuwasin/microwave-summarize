import React from 'react'
import styled from 'styled-components'

function Button({ children }) {
  return (
    <SButton type='button' className="class=py-3 px-4 py-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-200 text-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-all text-sm dark:bg-gray-400 dark:hover:bg-gray-500 dark:focus:ring-offset-gray-800 ">
      {children}
    </SButton>
  );
}
const SButton = styled.button`
  min-width: 100px;
`;
export default Button