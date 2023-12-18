// page.js
"use client";
import { useState } from "react";
import Map, { NavigationControl, GeolocateControl, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// import { GiPositionMarker } from "react-icons/gi";

 //import classes from "./Page.module.css";


 import { useEffect } from "react";


import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function MapComponent() {
	const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
	const [direction , setDirection] = useState(null);
	

	useEffect(() => {
		fetch("https://api.mapbox.com/directions/v5/mapbox/driving/-122.42,37.78;-77.03,38.91?access_token=pk.eyJ1IjoiaGFyaXNoLW0iLCJhIjoiY2xteXl1dTVzMTYyYzJubTJ1Y21qMXlpMyJ9.ijMhWDC6iCuvKNMgtfHbHQ")
		.then(res => res.json())
		.then((data)=>setDirection(data))
		.catch( err => console.log(err));
	},[]);

	// console.log(direction);

	return (
		<main  style={{ borderRadius : "50px" , height : "25rem"}}>
			
			<Map
				mapboxAccessToken={mapboxToken}
				// mapStyle="mapbox://styles/mapbox/streets-v12"
				mapStyle={"mapbox://styles/harish-m/clpxs1o29001501plgxg78a37"}
				//style={classes.mapStyle}
				initialViewState={{ latitude: 35.668641, longitude: 39.750567, zoom: 10 }}
				maxZoom={20}
				minZoom={3}
				
			>
				<GeolocateControl position="top-left" />
				<NavigationControl position="top-left" />
				
			</Map>
		</main>
	);
}