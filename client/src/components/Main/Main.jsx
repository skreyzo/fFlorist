import React from "react";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import Title from "../Title/Title";
import styled from "./main.module.css";

const Main = () => {
  return (
    <div>
      <div className={styled.wrapper}>
        <div className={styled.content}>
          <Title />
          <Body />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
