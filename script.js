
require (["esri/Map", "esri/views/MapView"],
   function(Map, MapView)
   {
      let map1=new Map({basemap:"topo"})
      let mapContainer=new MapView({
          container:"map1",
          map:map1
          


      });
   })