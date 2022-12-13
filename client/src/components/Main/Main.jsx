import React from "react";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import Title from "../Title/Title";

const Main = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="content">
          <Title />
          <Body />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
