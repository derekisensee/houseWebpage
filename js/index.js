$(document).ready(function() {
    var d = new Date();
    document.getElementById("currTimeDate").innerHTML = d.toDateString() + " " + d.toLocaleTimeString();
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?id=4671240&&units=imperial&appid=e3006743a66ee1367c2965b54451ca7a", function(data) {
        var currTemp = data.main.temp;
        var minTemp = data.main.temp_min;
        var maxTemp = data.main.temp_max;
        
        $("#currentTemp").append(currTemp + " F");
        $("#lowTemp").append(minTemp + " F");
        $("#maxTemp").append(maxTemp + " F");
    });
});