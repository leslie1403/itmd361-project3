function init(){
  //alert('it works');
  var el = document.getElementById('canvas');
  var adler = new google.maps.LatLng(41.8661, -87.6066);
  var lake = new google.maps.LatLng(41.866592, -87.605208);
  var mapOptions = {
    center: adler,
    zoom: 15,
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
    //icon: 'star.png'
  });

  marker.setMap(adler);

  var lakeMarker = new google.maps.Marker({
    position: lake,
    map: myMap,
    title: "Lake Michigan",
    //icon: 'star.png'
  });

  marker.setMap(lake);

  var contentString = '<h1>Adler Planetarium</h1><p>One of the museums in Chicago, holds many events such as the most recent being the Solar Eclipse watch viewing party.</p>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

  google.maps.event.addListener(marker, 'mouseover', function() {
      infowindow.open(myMap, marker);
    });
   google.maps.event.addListener(lakeMarker, 'mouseover', function() {
      infowindow.open(myMap, lakeMarker);
    });


}

google.maps.event.addDomListener(window, 'load', init);