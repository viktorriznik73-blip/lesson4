 navigator.geolocation.getCurrentPosition(function(position) {
    document.write(position.coords.accuracy.latitude + " , " + position.coords.longitude)
}) 