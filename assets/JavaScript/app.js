
/* Variables */

var danceMoves = ["The Hustle", "Dab", "The Cat Daddy", "The Floss", "The Robot", "The Electric Slide", "The Stomp", "The Milly Rock", "The Running Man", "The MC Hammer", "The Shuffle", "Hit Dem Folk", "Shoot", "Vogue", "The Moonwalk", "The Dougie", "The Twist", "The Carlton", "Sangria Wine"];

console.log(danceMoves.length);

/* queryURL for Giphy API */
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});
