import React from "react";

import Pagelayout from "../../PageLayout";

import { Filter } from "./Filter";
import styled from "styled-components";
import Watchdata from "./Watchdata";
const Shopping = () => {
  return (
    <div>
      <Pagelayout>
        <p className="ALL">ALL</p>
        <Wrapper>
          <WrapperSort>
            <Filter />
          </WrapperSort>
          <WrapperWatchData>
            <Watchdata />
          </WrapperWatchData>
        </Wrapper>
      </Pagelayout>
    </div>
  );
};

const Wrapper = styled.div`
  //   border: 1px solid red;
  display: flex;
  height: 100%;
  min-height: 100vh;
`;

const WrapperSort = styled.div`
  width: 300px;
  border: 2px solid black;
  padding: 50px;
`;

const WrapperWatchData = styled.div`
  width: 80%;
  margin: auto;
  border: 2px solid black;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
  justify-content: center;
  grid-gap: 10px;
`;
export default Shopping;
