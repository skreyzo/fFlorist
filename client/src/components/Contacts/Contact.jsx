import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

// import styled from "./contacts.module.css";

const Contacts = () => {
  return (
    <>
    <div>
     <p> Где мы находимся</p>
    </div>
      <YMaps>
        <Map
          defaultState={{
            center: [56.30339278464996, 38.13734384788514],
            zoom: 16,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          <Placemark
            modules={["geoObject.addon.balloon"]}
            defaultGeometry={[56.30339278464996, 38.13734384788514]}
            properties={{
              balloonContentBody: 'магазин "SweetBuket"',
            }}
          />
        </Map>
      </YMaps>
    </>
  );
};

export default Contacts;
