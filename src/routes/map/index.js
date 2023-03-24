import { h, Component } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import style from './style.css';
import Button from '../../components/Button';
let id = 0;

const Map = () => {
  const mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibXVqZWViYSIsImEiOiJjbGZmZHM5MTkwdm15NDBuemM3dzlycmJvIn0.NHuXP35hgr70TT3p1Z27Vw';

    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    var centerVar = [-0.04053,51.52441];

    if ((urlParams.has('long')) &&  (urlParams.has('lat'))) {
        centerVar = [parseFloat(urlParams.get('long')), parseFloat(urlParams.get('lat'))]
    }

    const map = new mapboxgl.Map ({
      container: mapRef.current, // container id
      style: 'mapbox://styles/mapbox/streets-v12', // stylesheet location
      center: centerVar, // starting position [lng, lat] at Mile End
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

  const processLocation = (e) => {
    e.stopImmediatePropagation();
    const map = mapRef.current;
    const origin = map.querySelector('#mapbox-directions-origin-input').querySelector('input').value;
    const destination = map.querySelector('#mapbox-directions-destination-input').querySelector('input').value;

    sessionStorage.setItem(id, JSON.stringify({
      'origin': origin,
      'destination': destination
    }));
    id += 1;
  }

  return (
    <div>
      <div class={style.actions}>
        <button onClick={processLocation}>
          <img class={style.icon} src="https://www.dropbox.com/s/7yf0fho18o3ofpm/bookmark-svgrepo-com%281%29.svg?raw=1"/>Bookmark
        </button>
      </div>
      <div ref={mapRef} // reference to the DOM element
      style={{ position: 'absolute', top: 0, bottom: 50, width: '450px' }} // style the map container
      />
    </div>
  );
};

export default Map;
