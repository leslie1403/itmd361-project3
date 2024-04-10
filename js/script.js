function init(){
  //alert('it works');
  var el = document.getElementById('canvas');
  var adler = new google.maps.LatLng(41.8661, -87.6066);
  var lake = new google.maps.LatLng(41.866592, -87.605208);
  var mapOptions = {
    center: adler,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };

  var myMap = new google.maps.Map(el, mapOptions);

  var marker = new google.maps.Marker({
    position: adler,
    map: myMap,
    title: "Adler Planetarium",
    animation: google.maps.Animation.BOUNCE,
  });

  var lakeMarker = new google.maps.Marker({
    position: lake,
    map: myMap,
    title: "Lake Michigan",
  });

  marker.setMap(adler);
  lakeMarker.setMap(lake);

  var contentString = '<h1>Adler Planetarium</h1><p>One of the museums in Chicago, holds many events such as the most recent being the Solar Eclipse watch viewing party.</p>';

  var infowindow = new google.maps.InfoWindow({
    position:adler,
    content: contentString
   });

  var contentStringLake = '<h1>Lake Michigan</h1><p>One of the five great lakes, located East of Chicago. Provides the city with plenty of beaches and summer activities.</p>';

  var infowindowLake = new google.maps.InfoWindow({
    position:lake,
    content: contentStringLake
   });

  google.maps.event.addListener(marker, 'mouseover', function() {
      infowindow.open(myMap, marker);
    });
   google.maps.event.addListener(lakeMarker, 'mouseover', function() {
      infowindowLake.open(myMap, lakeMarker);
    });

  const parkingCoor = [
    { lat: 41.866078, lng: -87.609836 },
    { lat: 41.866078, lng: -87.607684},
    { lat: 41.864790, lng: -87.608730 },
  ];

  const shape = new google.maps.Polygon({
    path: parkingCoor,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  shape.setMap(parkingCoor);

}

google.maps.event.addDomListener(window, 'load', init);