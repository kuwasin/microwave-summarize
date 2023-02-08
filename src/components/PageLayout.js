import React from 'react'
import styled from 'styled-components'

function PageLayout({children}) {
  return (
    <PageContainer >{ children}</PageContainer>
  )
}

const PageContainer = styled.div`
  height: 100%;
  background-color: beige;
  padding: 5% 15%;
  min-height: 100vh;
`;
export default PageLayout