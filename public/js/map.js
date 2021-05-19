mapboxgl.accessToken = 'pk.eyJ1Ijoic2FsbWExNyIsImEiOiJja29rNWE3OW0xMWZzMnBybXM1ZTU2Yzk2In0.EzBcOH3IfXFAAZZSAOlJNw';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
zoom: 9,
center: [-5.833954, 35.759465] //LONGITUDE ET LATITUDE DE TANGER
});

// Fetch cafeterias from API
async function getCafeterias() {
    const res = await fetch('/api/v1/cafeterias');
    const data = await res.json();
  
    const cafeterias = data.data.map(cafeteria => {
      return {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [
            cafeteria.location.coordinates[0],
            cafeteria.location.coordinates[1]
          ]
        },
        properties: {
          cafeteriaId: cafeteria.cafeteriaId,
          icon: 'cafe'  //commercial
        }
      };
    });
  
    loadMap(cafeterias);
  }
  
  // Load map with cafeterias
  function loadMap(cafeterias) {
    map.on('load', function() {
      map.addLayer({
        id: 'points',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: cafeterias
          }
        },
        layout: {
          'icon-image': '{icon}-15',
          'icon-size': 1.5,
          'text-field': '{cafeteriaId}',
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-offset': [0, 0.9],
          'text-anchor': 'top'
        }
      });
    });
  }
  
  getCafeterias();