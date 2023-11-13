import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import "./Map.css";

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBXCRCBmXpbFaTXaCaFeedxiXj9d0maz0s",
  });
  return (
    <>
      {isLoaded ? (
        <GoogleMap
          zoom={10}
          center={{ lat: 44, lng: -80 }}
          mapContainerClassName="map-container"
        ></GoogleMap>
      ) : (
        <div>Loadiing ... </div>
      )}
    </>
  );
}
