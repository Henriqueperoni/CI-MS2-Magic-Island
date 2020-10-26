// Initialize and add the map
function initMap() {
  const mallorca = { lat: 39.617909, lng: 2.978694 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: mallorca,
  });
  var markers = [
    {
      coords: { lat: 39.31361, lng: 3.121398 },
      content: "<h2>Caló des Moro</h2>",
    },
    {
      coords: { lat: 39.349545, lng: 3.185803 },
      content: "<h2>Playa de S'Amarador</h2>",
    },
    {
      coords: { lat: 39.720876, lng: 3.454833 },
      content: "<h2>Calla Agulla</h2>",
    },
    {
      coords: { lat: 39.330299, lng: 3.146721 },
      content: "<h2>Cala Santanyí</h2>",
    },
    {
      coords: { lat: 39.329965, lng: 3.171178 },
      content: "<h2>Restaurant L'Arcada</h2>",
    },
    {
      coords: { lat: 39.349545, lng: 3.185803 },
      content: "<h2>Playa de S'Amarador</h2>",
    },
    {
      coords: { lat: 39.349545, lng: 3.185803 },
      content: "<h2>Playa de S'Amarador</h2>",
    },
    {
      coords: { lat: 39.349545, lng: 3.185803 },
      content: "<h2>Playa de S'Amarador</h2>",
    },
    {
      coords: { lat: 39.349545, lng: 3.185803 },
      content: "<h2>Playa de S'Amarador</h2>",
    },
    {
      coords: { lat: 39.349545, lng: 3.185803 },
      content: "<h2>Playa de S'Amarador</h2>",
    },
    {
      coords: { lat: 39.349545, lng: 3.185803 },
      content: "<h2>Playa de S'Amarador</h2>",
    },
    {
      coords: { lat: 39.349545, lng: 3.185803 },
      content: "<h2>Playa de S'Amarador</h2>",
    },
  ];

  for (var i = 0; i < markers.length; i++) {
    // Add marker
    addMarker(markers[i]);
  }

  function addMarker(props) {
    let marker = new google.maps.Marker({
      position: props.coords,
      map: map,
    });

    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content,
      });
    }

    marker.addListener("click", function () {
      infoWindow.open(map, marker);
    });
  }
}
