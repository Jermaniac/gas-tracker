"use client";

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
  zoom: 19,
};

const Map = ({ zoom = defaults.zoom, posix, list }: MapProps) => {
  const [newList, setNewList] = useState<any[]>([]);

  useEffect(() => {
    if (list && list.length > 0) {
      const formattedList = list.slice(0,5).map(item => ({
        position: [
          parseFloat(item['Latitud'].replace(",", ".")),
          parseFloat(item['Longitud (WGS84)'].replace(",", "."))
        ],
        name: item['Rótulo']
      }));
      setNewList(formattedList);
    }
  }, [list]);

  return (
    <div style={{ height: "300px", width: "100%" }}>
      <MapContainer
        center={posix}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        { newList && newList.map((item, index) => (
          <Marker key={index} position={item.position} draggable={false}>
            <Popup>{item.name}</Popup>
          </Marker>
        ))
        }
      </MapContainer>
    </div>
  );
};

export default Map;
