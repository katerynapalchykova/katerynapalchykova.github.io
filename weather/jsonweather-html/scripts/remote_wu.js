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
//        dataType : "jsonp",
//        success : function(parsed_json) {
//        var location = parsed_json['location']['city'];
//        var temp_f = parsed_json['current_observation']['temp_f'];
//        $('#currentTemp').html(Math.round(temp_f) +  " &#8457" );
//        $("#cityDisplay").text(parsed_json.current_observation.display_location.full);
//        $("#summary").text(parsed_json.current_observation.weather);
//        $("#add1").html(" Feels like  " + Math.round(parsed_json.current_observation.feelslike_f) + " &#8457");
//        $("#add2").text("Humidity:  " + parsed_json.current_observation.relative_humidity);
//        $("#add3").html("Wind from the " + parsed_json.current_observation.wind_dir + " at " + parsed_json.current_observation.wind_mph + " mph");


        dataType : "jsonp",
        success : function(parsed_json) {
        var location = parsed_json['location']['city'];
        var temp_f = parsed_json['current_observation']['temp_f'];
        var state = parsed_json['location']['state'];
        var summary = parsed_json['current_observation']['weather'];
        var wind = parsed_json['current_observation']['wind_mph'];
        var precip = parsed_json['current_observation']['precip_today_in'];
        var feelslike = parsed_json['current_observation']['feelslike_f'];
        var update = parsed_json['current_observation']['observation_time'];
        $("#currentTemp").html(Math.round(temp_f) + "&#176;");
        $("#cityDisplay").html(location + "," + state);
        $('#summary').html(summary);
        $('#add1').html("Wind MPH:" + " " + wind);
        $('#add2').html("Today's Precipitation:" + ' ' + precip);
        $('#add3').html("Feels like:" + ' ' + Math.round(feelslike));
        $('#update').html(update);

      $("#cover").fadeOut(250);
    }
           });

  }

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});
