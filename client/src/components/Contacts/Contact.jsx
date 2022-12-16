import React from "react";
import { YMaps, Map } from "@pbe/react-yandex-maps";

// import styled from "./contacts.module.css";

const Contacts = () => {

  return (
    <YMaps>
      <div>My awesome application with maps!

      <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />

      </div>
    </YMaps>
  );
};

export default Contacts;
