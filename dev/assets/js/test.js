$(function() {
  var locations;
  $.ajax({
    beforeSend: function(xhr){
      if (xhr.overrideMimeType) {
        xhr.overrideMimeType('application/json');
      }
    }
  });

  function loadLocations() {
    $.getJSON('assets/js/locations.json')
    .done( function(data) {
      locations = data;
    }).fail( function() {
      console.log("Sorry! Couldn't load JSON data. ")
    });
  }

  loadLocations();
  console.log(loadLocations);
});
