import React from "react";
import AllBouquets from "../AllBouquets/AllBouquets";
import Contacts from "../Contacts/Contact";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

import Title from "../Title/Title";
import styled from "./main.module.css";
import { Route, Routes } from "react-router-dom";

let arr = [
  {id: 1, title: "Букет Ferrero Rocher", photo: 'images/1Pic.jpeg', price: '1300'},
  {id: 2, title: "Набор клубника в шоколаде, 9шт", photo: 'images/2Pic.jpeg', price: "1 000"},
  {id: 3, title: 'Букет "шоколадное чудо"', photo: 'images/3Pic.jpeg', price: "2 200"},
  {id: 4, title: "Название четвертого букета", photo: 'images/4Pic.jpeg', price: "2 200"},
];

const Main = () => {
  return (
    <>
      <div>
        <div className={styled.wrapper}>
          <div className={styled.content}>
            <Title />
            <Routes>
              <Route path="/all" element={<AllBouquets arr={arr} />}></Route>
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
