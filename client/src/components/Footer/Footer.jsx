import React from "react";
import styled from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styled.ftr}>
      <p>© 2022 Food Flowers Company</p>
      <p>+7 (916) 504-55-85</p>
      <p>ул. Вокзальная площадь 2, Сергиев Посад</p>
      <p>А-108, 112-й километр, Березняки</p>
    </div>
  );
};

export default Footer;
