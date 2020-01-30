mapa1 = document.getElementById("mapa1");
mapa2 = document.getElementById("mapa2");
mapa3 = document.getElementById("mapa3");
mapa4 = document.getElementById("mapa4");

przycisk1 = document.getElementById("przycisk1");
przycisk2 = document.getElementById("przycisk1");
przycisk3 = document.getElementById("przycisk1");
przycisk4 = document.getElementById("przycisk1");

require (["esri/Map", "esri/views/MapView"],
   function(Map, MapView)
   {
    let map1 = new Map({basemap:"streets"});

    let mapContainer = new MapView({
        container: "d",  
        map: map1  
        , zoom:14,
        center: [22.57, 51.25],              
     }); 

   })

require (["esri/Map", "esri/views/MapView"],
   function(Map, MapView)
   {
   mapa1.addEventListener("click", function(){
    let map1 = new Map({basemap:"satellite"});

    let mapContainer = new MapView({
        container: "d",  
        map: map1  
        , zoom:14,
        center: [22.57, 51.25],       
     }); 

   })})

   require (["esri/Map", "esri/views/MapView"],
   function(Map, MapView)
   {
   mapa2.addEventListener("click", function(){
    let map1 = new Map({basemap:"topo"});

    let mapContainer = new MapView({
        container: "d",  
        map: map1,
        zoom:14,
        center: [22.57, 51.25],     
     }); 

   })})

   require (["esri/Map", "esri/views/MapView"],
   function(Map, MapView)
   {
   mapa3.addEventListener("click", function(){
    let map1 = new Map({basemap:"osm"});

    let mapContainer = new MapView({
        container: "d",  
        map: map1  
        , zoom:14,
        center: [22.57, 51.25],   
     }); 

   })})

   require (["esri/Map", "esri/views/MapView", "esri/WebMap"],
   function(Map, MapView, WebMap, webMercatorUtils)
   {
   mapa4.addEventListener("click", function(){
    let map1 = new WebMap({
      portalItem: {
         id: "ef139263371049d99aec9894f1c09258"
      }
   })

    let mapContainer = new MapView({
        container: "d",   
        map: map1  
        , zoom:14,
        center: [22.57, 51.25],    
     }); 

     var basemapGallery = new BasemapGallery({
      view: view,
      source: {
        portal: {
          url: "https://www.arcgis.com",
          useVectorBasemaps: true  // Load vector tile basemaps
        }
      }
      
    });
    view.ui.add(basemapGallery, "top-right");
   })})