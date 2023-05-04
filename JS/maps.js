// Initialize and add the map
function initMap() {
    // The location of Uluru
    const cine = { lat: 28.656765, lng: -17.910492 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("mapa"), {
      zoom: 18,
      center: cine,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: cine,
      map: map,
    });
  }
  
  window.initMap = initMap;