setTimeout(function myMap() {
    var myLatLng = { lat: 32.963917, lng: -96.915898 };
    var mapOptions = {
      center: myLatLng,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      draggable: true,
      scrollwheel: true
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
      position: mapOptions.center,
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP
    });
    marker.addEventListener("click", toggleBounce);
    function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }
  }, 1500);