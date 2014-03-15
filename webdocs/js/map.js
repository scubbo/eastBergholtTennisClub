function createMap() {
    mapDiv = $('#mapDiv');

    clubLocation = new google.maps.LatLng(51.970, 1.029);

    var mapOptions = {
        center: clubLocation,
        zoom: 15
    };

    var map = new google.maps.Map(mapDiv.get(0),
                mapOptions);

    var marker = new google.maps.Marker({
        map: map,
        position: clubLocation,
        animation: google.maps.Animation.DROP
    });
}
