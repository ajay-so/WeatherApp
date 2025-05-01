import { useEffect, useRef } from "react";
import * as maptilersdk from "@maptiler/sdk";
// import "@maptiler/sdk/dist/maptiler-sdk.css";


const API_KEY = "cJsdvnNdt9Wy3ktrXaC2"; 

export default function MapComponent({ coords }) {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  // const styleUrl =  `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`;

  useEffect(() => {
    maptilersdk.config.apiKey = API_KEY;

    if (!mapRef.current) {
      const map = new maptilersdk.Map({
        container: "map",
        style: maptilersdk.MapStyle.STREETS,
        center: coords,
        zoom: 8,
      });

      mapRef.current = map;

      map.on("load", () => {
        if (!markerRef.current) {
          markerRef.current = new maptilersdk.Marker({ color: "red" })
            .setLngLat(coords)
            .addTo(map);
        }
      });

      map.on("webglcontextlost", () => {
        alert("WebGL context lost. Reloading map...");
        setTimeout(() => {
          window.location.reload();
        }, 100);
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (mapRef.current && markerRef.current) {
      markerRef.current.setLngLat(coords);
      mapRef.current.flyTo({
        center: coords,
        zoom: 6,
        essential: true,
      });
    }
  }, [coords]);
  

  return (
    <div
      id="map"
      className="border border-info rounded-1 shadow-sm bg-body-tertiary"
      style={{ height: "400px" }}
    />
  );
}
