import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const center = {
  lat: 42.69722692942672,
  lng: 23.318174953200177,
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
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMap;
