// Add console.log to check to see if our code is working.
console.log("working");
// Get data from cities.js
// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};



// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);

// //  Add a marker to the map for Los Angeles, California.
// // let marker = L.marker([34.0522, -118.2437]).addTo(map);
// // replace the marker with circle
// // L.circleMarker([34.0522, -118.2437], {
// //     radius: 100,
// //     color:"black",
// //     fillColor: "#ffffa1"
// //  }).addTo(map);

// // Coordinates for each point to be used in the polyline.
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790],
//   [40.7899, -111.9791],
//   [47.4502, -122.3088]
// ];

// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//   color: "yellow"
// }).addTo(map);

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(city)
//   L.circleMarker(city.location,{
//     radius: city.population/100000
//   })
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population + "</h3>")
// .addTo(map);
// });

// Alternative to setView() method
// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
    // center: [
      // 40.7, -94.5
    // ],
   //  zoom: 4
  // });

// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.name +  "</h2> <hr> <h3>" + feature.properties.city + "," + feature.properties.country + "</h3");
//   }

L.geoJSON(sanFranAirport, {
  onEachFeature: function(feature, layer) {
    console.log(layer)
    layer.bindPopup("<h2>" + " Airport code :" + feature.properties.faa +  "</h2> <hr> <h3>" +  "Airport Name :" + feature.properties.name + "</h3");
   }
}).addTo(map);
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data ?? <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
    id: "mapbox/dark-v10"
});

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/<GitHub_name>/Mapping_Earthquakes/main/majorAirports.json";

// var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery ?? <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "dark-v10",
//   accessToken: API_KEY
// });

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);