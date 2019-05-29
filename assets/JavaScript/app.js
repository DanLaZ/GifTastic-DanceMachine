
/* Variables */

var danceMoves = ["The Hustle", "Dab", "The Cat Daddy", "The Floss", "The Robot", "The Electric Slide", "The Stomp", "The Milly Rock", "The Running Man", "The MC Hammer", "The Shuffle", "Hit Dem Folk", "Shoot", "Vogue", "The Moonwalk", "The Dougie", "The Twist", "The Carlton", "Sangria Wine", "Daggering", "Dutty Wine", "The Harlem Shake", "The Macarena"];

console.log(danceMoves.length);

// function alertDanceName() {

//     var danceName = $(this).attr("data-name");

//     alert(danceName);
// }

/* queryURL for Giphy API */
// var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=g0AzH16XHsMCcQY7krnPL8aac12JbfXJ";

function displayGif(){
    
    var dance = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + dance + "+" + "dance" + "&api_key=g0AzH16XHsMCcQY7krnPL8aac12JbfXJ&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        
        var dataArrayNum = response.data;
        console.log(dataArrayNum);

        for (var i = 0; i < dataArrayNum.length; i++) {
            

            
            $("<img>").addClass("gif");
            $("<img>").attr("src", dataArrayNum[i].images.downsized_large.url);

            $("#gifDump").append($("<p>").text(dance));

            $("#gifDump").append($("<p>").text("Rating: " + dataArrayNum[i].rating.toUpperCase()));

            $("#gifDump").append($("<img>").attr("src", dataArrayNum[i].images.downsized_large.url));

        }

        
    





    });



}

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

$(document).on("click", ".dance", displayGif);

loadButtons();