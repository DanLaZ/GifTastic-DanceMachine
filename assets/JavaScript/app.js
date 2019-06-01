
/* Dance Array */

var danceMoves = ["The Hustle", "Dab", "The Cat Daddy", "The Floss", "The Robot", "The Electric Slide", "The Stomp", "The Milly Rock", "The Running Man", "The MC Hammer", "The Shuffle", "Hit Dem Folks", "Shoot", "Vogue", "The Moonwalk", "The Dougie", "The Twist", "The Carlton", "Sangria Wine", "Daggering", "Dutty Wine", "The Harlem Shake", "The Macarena"];

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
            
            var gifImg = $("<img>");
            gifImg.addClass("gif");
            gifImg.attr("src", dataArrayNum[i].images.downsized_large.url);

            var gifDisplay = $("#gifDump");
            var danceHeader = $("<p>");
            var ratingHeader = $("<p>"); 

            gifDisplay.append(danceHeader.text(dance).addClass("danceHeader"));
            gifDisplay.append(ratingHeader.text("Rating: " + dataArrayNum[i].rating.toUpperCase()).addClass("ratingHeader"));
            gifDisplay.append($("<img>").attr("src", dataArrayNum[i].images.downsized_large.url));

        }
    });

}

/* Create Buttons */
function loadButtons(){

    $("#buttons").empty();
    for (var i = 0; i < danceMoves.length; i++) {
        var danceButtons = $("<button>");
        danceButtons.addClass("danceButton");
        danceButtons.attr("data-name", danceMoves[i]);
        danceButtons.text(danceMoves[i]);
        $("#buttons").append(danceButtons);
    }
}

/* Form Button Logic */
$("#addButton").on("click", function(event) {

    event.preventDefault();
    var addedDance = $("#newDance").val().trim();
    danceMoves.push(addedDance);
    loadButtons();
});



$(document).on("click", ".danceButton", displayGif);

loadButtons();
