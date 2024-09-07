import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./Map.css";

const center = {
  lat: 42.69722692942672,
  lng: 23.318174953200177,
};

const center1 = {
  lat: 42.66448564840545,
  lng: 23.31615018996561,
};

const MyMap = () => {
  const [containerStyle, setContainerStyle] = useState({
    width: "1100px",
    height: "550px",
  });

  const updateContainerStyle = () => {
    if (window.innerWidth <= 650) {
      setContainerStyle({
        width: "100%",
        height: "250px",
      });
    } else {
      setContainerStyle({
        width: "70%",
        height: "550px",
      });
    }
  };

  useEffect(() => {
    updateContainerStyle();
    window.addEventListener("resize", updateContainerStyle);
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyBWCTmhgDnMJbuadG-hlCTx-3Y7bwFrQj8">
      <div className="map_container">
        <div className="map_wrapper">
          <h1 className="address">бул. Александър Стамболийски 29,София</h1>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
          >
            <Marker position={center} />
          </GoogleMap>
        </div>
        <div className="map_wrapper">
          <h1 className="address">бул. Никола Вапцаров 29,София</h1>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center1}
            zoom={16}
          >
            <Marker position={center1} />
          </GoogleMap>
        </div>
      </div>
    </LoadScript>
  );
};

export default MyMap;
