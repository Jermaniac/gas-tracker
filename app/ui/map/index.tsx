"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { GasStation } from "@/app/lib/definitions";
import { useEffect, useState } from "react";

interface MapProps {
  posix: LatLngExpression | LatLngTuple;
  zoom?: number;
  list: GasStation[];
}

const defaults = {
  zoom: 5,
};

const Map = ({ zoom = defaults.zoom, posix, list }: MapProps) => {
  const [newList, setNewList] = useState<any[]>([]);

  useEffect(() => {
    if (list && list.length > 0) {
      const formattedList = list.map(item => ({
        position: [
          parseFloat(item.latitude.replace(",", ".")),
          parseFloat(item.longitude.replace(",", "."))
        ],
        name: item.stationName
      }));
      setNewList(formattedList);
    }
  }, [list]);

  return (
    <MapContainer
      center={posix}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {newList && newList.map((item, index) => (
        <Marker key={index} position={item.position} draggable={false}>
          <Popup>{item.name}</Popup>
        </Marker>
      ))
      }
    </MapContainer>
  );
};

export default Map;
