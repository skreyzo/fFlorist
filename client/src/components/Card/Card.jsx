import React from "react";
import { Link } from "react-router-dom";
// import styled from "./card.module.css";

const Card = ({ el }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={el.photo} height="100%" width="100%" alt={el.title}></img>

        <div className="card-body">
          <h5 className="card-title">{el.title}</h5>
          <h5 className="card-text">{el.price} руб.</h5>
          <Link to="#" className="btn btn-primary">
            Заказать
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
