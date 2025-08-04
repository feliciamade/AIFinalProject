import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from "./map.module.css";

function MemphisMap() {
  const memphisCoords = [35.1495, -90.0489]; 
  const zoomLevel = 13;

  return (
    <MapContainer center={memphisCoords} zoom={zoomLevel} className={styles.mapContainer}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    
      <Marker position={[35.137, -90.051]}> 
        <Popup>
          Beale Street
        </Popup>
      </Marker>
      <Marker position={[35.109, -90.058]}> 
        <Popup>
          Graceland
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MemphisMap;