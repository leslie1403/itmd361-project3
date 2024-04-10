var map;
function initMap() {
  map = new google.maps.Map(doucemnt.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
google.maps.event.addDomListener(window,'load', initMap);