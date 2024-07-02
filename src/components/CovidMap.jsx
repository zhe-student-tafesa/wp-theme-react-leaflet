import React from "react";
import { Map, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CovidMap.css";
import ReactDOM from "react-dom";

// Frank
import PopupContent from "./PopupContent";
import ReactDOMServer from "react-dom/server";
const CovidMap = ({ countries }) => {
  const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "white",
    fillOpacity: 0.5,
  };

  const onEachCountry = (country, layer) => {
    layer.options.fillColor = country.properties.color;
    const name = country.properties.ADMIN;
    const confirmedText = country.properties.confirmedText;
    const salesData = country.properties.salesData;
    //
    layer.on({
      mouseover: (event) => {
        if (layer.feature.properties.salesData != null) {
          const layer = event.target;
          console.log(layer.feature.properties.salesData);
          layer.setStyle({
            fillOpacity: 1,
          });
        }
      },
      mouseout: (event) => {
        const layer = event.target;
        layer.setStyle({
          fillOpacity: 0.5,
        });
      },
    });

    layer.bindPopup(function () {
      const popupContentElement = document.createElement("div");
      ReactDOM.render(
        <PopupContent
          name={name}
          confirmedText={confirmedText}
          salesData={salesData}
        />,
        popupContentElement
      );
      return popupContentElement;
    });
  };

  return (
    <Map style={{ height: "70vh" }} zoom={2} center={[20, 60]}>
      <GeoJSON
        style={mapStyle}
        data={countries}
        onEachFeature={onEachCountry}
      />
    </Map>
  );
};

export default CovidMap;
