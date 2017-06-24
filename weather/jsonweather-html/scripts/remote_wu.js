// Current Location Scripts
$(function () {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
  function getData(lat, long){
    $.ajax({

        $.ajax({
        url : "http://api.wunderground.com/api/a8791e5a6a538fa0/geolookup/q/"+lat+","+long+".json";
//        dataType : "jsonp",
//        success : function(parsed_json) {
//        var location = parsed_json['location']['city'];
//        var temp_f = parsed_json['current_observation']['temp_f'];
//        $("#current_conditions").html(temp_f);


        dataType : "jsonp",
        success : function(parsed_json) {
        var location = parsed_json['location']['city'];
        var temp_f = parsed_json['current_observation']['temp_f'];
        $('#currentTemp').html(Math.round(temp_f) +  " &#8457" );
        $("#cityDisplay").text(parsed_json.current_observation.display_location.full);
        $("#summary").text(parsed_json.current_observation.weather);
        $("#add1").html(" Feels like  " + Math.round(parsed_json.current_observation.feelslike_f) + " &#8457");
        $("#add2").text("Humidity:  " + parsed_json.current_observation.relative_humidity);
        $("#add3").html("Wind from the " + parsed_json.current_observation.wind_dir + " at " + parsed_json.current_observation.wind_mph + " mph");

        // /g/" + lat + "," + lon + " .json" ;
        //$("#current.temp").html(temp_f);

//        url : "http://api.wunderground.com/api/a8791e5a6a538fa0/geolookup/conditions/q/IA/Cedar_Rapids.json",
//        dataType : "jsonp",
//        success : function(parsed_json) {
//            var location = parsed_json['location']['city'];
//            var temp_f = parsed_json['current_observation']['temp_f'];







      $("#cover").fadeOut(250);
    }
           });

  }

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});
