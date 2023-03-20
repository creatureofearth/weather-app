import { h, Component } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import style from './style.css'; 

const Map = () => {
  const mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibXVqZWViYSIsImEiOiJjbGZmZHM5MTkwdm15NDBuemM3dzlycmJvIn0.NHuXP35hgr70TT3p1Z27Vw';

    const map = new mapboxgl.Map ({ 
      container: mapRef.current, // container id
      style: 'mapbox://styles/mapbox/streets-v12', // stylesheet location
      center: [-0.04053,51.52441], // starting position [lng, lat] at Mile End
      zoom: 13
    });

    map.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken, // Set the access token
		profile: 'mapbox/cycling' //Cycling directions open first.
      }),
      'top-left'
    );
  });

  return (
    <div>
      <div ref={mapRef} // reference to the DOM element 
      style={{ position: 'absolute', top: 0, bottom: 50, width: '100%' }} // style the map container
   />
    </div>
  );
};

export default Map;