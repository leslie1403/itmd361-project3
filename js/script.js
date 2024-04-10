function init() {
  alert('Leslie Esquivel');
  var map;
  function initMap()
      map = new google.maps.Map(document.getElementById('map'),
      {center: {lat:-34.397, lng:150.644},
      zoom:8 
    });
  initMap();
}

google.maps.event.addDomListener(window,'load', init);