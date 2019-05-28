
/* Variables */

var danceMoves = ["The Hustle", "Dab", "The Cat Daddy", "The Floss", "The Robot", "The Electric Slide", "The Stomp", "The Milly Rock", "The Running Man", "The MC Hammer", "The Shuffle", "Hit Dem Folk", "Shoot", "Vogue", "The Moonwalk", "The Dougie", "The Twist", "The Carlton", "Sangria Wine"];

console.log(danceMoves.length);

function alertDanceName() {

    var danceName = $(this).attr("data-name");

    alert(danceName);
}

/* queryURL for Giphy API */
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=g0AzH16XHsMCcQY7krnPL8aac12JbfXJ";

$.ajax({

  url: queryURL,
  method: "GET"
}).then(function(response) {

  console.log(response);
});

/* Create Buttons */

function loadButtons(){

    $("#buttons").empty();
    for (var i = 0; i < danceMoves.length; i++) {
        var danceButtons = $("<button>");
        danceButtons.addClass("dance");
        danceButtons.attr("data-name", danceMoves[i]);
        danceButtons.text(danceMoves[i]);
        $("#buttons").append(danceButtons);
    }
}

$(document).on("click", ".dance", alertDanceName);

loadButtons();