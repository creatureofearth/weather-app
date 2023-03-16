import { useEffect } from 'preact/hooks';
import style from './style.css'; 
 


const Map = () => { 
	  useEffect(() => {     
		
const script = document.createElement('script');     
script.src = 'https://api.mapbox.com/mapbox-gl-js/v2.5.0/mapbox-gl.js';  

script.onload = () => {       
	mapboxgl.accessToken = 'pk.eyJ1IjoiYnJpbmRhLTA5IiwiYSI6ImNsZjcydGR0dTFzZXYzcHIwZ3Ixdmo3YjEifQ.wZBtE8HK4-B-_LI9zYTJ3Q';       
	new mapboxgl.Map({         
		container: 'map-container',         
		style: 'mapbox://styles/mapbox/streets-v11'
	});     
	};     document.head.appendChild(script);   }, []);   
	

	return ( 
		
		
		<div class={style.main}>       
	      <div id="map-container" class={style.map}></div>     
		  </div>   ); 
		  }; 	
	
    export default Map;