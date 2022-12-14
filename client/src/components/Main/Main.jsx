import React from "react";
import AllBouquets from "../AllBouquets/AllBouquets";
import Contacts from "../Contacts/Contact";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

import Title from "../Title/Title";
import styled from "./main.module.css";
import { Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div>
        <div className={styled.wrapper}>
          <div className={styled.content}>
            <Title />
            <Routes>
              <Route path="/all" element={<AllBouquets />}></Route>
              <Route path="/" element={<Body />}></Route>
              <Route path="/contacts" element={<Contacts />}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Main;
