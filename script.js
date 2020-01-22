
require (["esri/Map", "esri/views/MapView"],
   function(Map, MapView)
   {
      let map1=new Map({basemap:"topo"})
      let map2=new Map({basemap:"satellite"})
      let map3=new Map({basemap:"osm"})
      let mapContainer=new MapView({
          container:"m1",
          map:map1
          
          


      });
      
 
   })
