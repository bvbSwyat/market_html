function initialize() {
    var mapCanvas = document.getElementById('map');

    var mapOptions = {
        center: new google.maps.LatLng(52.3702157, 4.8951679),
        zoom: 12,
        mapTypeIds: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: true,
        draggable: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        }
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    setMarker(map);
}

function setMarker(map) {

    var contentString = '<div class="map-window">'+
        '<div class="map-window-img">' +
        '<img src="images/img/24131_fullimage_Bloemenmarkt-Janskerkhof_560x350.jpg" alt="Img">' +
        '</div>'+
        '<div class="map-window-title">FlMarket</div>'+
        '</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var contentString2 = '<div class="map-window">'+
        '<div class="map-window-img">' +
        '<img src="images/img/Kaasmarkt2.jpg" alt="Img">' +
        '</div>'+
        '<div class="map-window-title">Kaasmarkten Edam</div>'+
        '</div>';
    var infowindow2 = new google.maps.InfoWindow({
        content: contentString2
    });

    var latlngbounds = new google.maps.LatLngBounds();

    var image = new google.maps.MarkerImage('../images/icon/marker-red.svg',
        new google.maps.Size(23, 31),
        new google.maps.Point(0, 0),
        new google.maps.Point(11, 45));

    var myLatLng = new google.maps.LatLng(52.3702157, 4.8951679);
    latlngbounds.extend(myLatLng);

    var myLatLng2 = new google.maps.LatLng(52.3822157, 4.9991679);
    latlngbounds.extend(myLatLng2);

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image,
        title: 'FlMarket'
    });

    var marker2 = new google.maps.Marker({
        position: myLatLng2,
        map: map,
        icon: image,
        title: 'Kaasmarkten Edam'
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

    marker2.addListener('click', function() {
        infowindow2.open(map, marker2);
    });
};
google.maps.event.addDomListener(window, 'load', initialize);

