var newArray = ["Boss DS-1", "Electro Harmonix Small Stone", "Strymon Big Sky", "MXR Phase 90", "Diamond Compressor"]


// Front end
$(function() {

  $("#pedals").click(function() {
    pedalsArray.map(function(pedal) {
      $("#pedal-list").append("<li>" + pedal.name + "</li>");
    });
  });

  $("#pedal-list").on('click', 'li', function() {
    var pedalName = $(this).text();
    console.log("li tag " + pedalName);
    newArray.map(function(arrayItem) {
      if (arrayItem === pedalName);
      $("#pedal-info-output").html("<li>" + arrayItem + "</li>");
    });
  });
});
