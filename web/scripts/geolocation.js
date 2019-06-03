function showPosition(position){
    console.log("Position: " + position.coords.latitude + " ||||| " + position.coords.longitude);
}

function getLocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported");
    }
}

getLocation();