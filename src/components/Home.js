import React from "react";
import {  Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <HomeContainer className="flex justify-center gap-20  items-center">
        <Link to={"/vesitables"}>
          <HomeContents vesitable>
            <h2>野菜</h2>
          </HomeContents>
        </Link>
        <Link to={"/meatfish"}>
          <HomeContents meatfish>
            <h2>肉、魚</h2>
          </HomeContents>
        </Link>
        <Link to={"/others"}>
          <HomeContents>
            <h2>その他</h2>
          </HomeContents>
        </Link>
       
      </HomeContainer>
    </>
  );
};
const HomeContainer = styled.div`
  height: 95vh;
`;
const HomeContents = styled.div`
  height: 250px;
  width: 250px;
  color: white;
  border-radius: 15px;

  background-color: ${(props) =>
    props.vesitable ? "green" : props.meatfish ? "red" : "grey"};
  > h2 {
    text-align: center;
    line-height: 250px;
    font-size: 35px;
  }
`;

export default Home;
