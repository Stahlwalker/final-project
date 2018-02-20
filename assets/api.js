
jQuery.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

// This .on("click") function will trigger the AJAX Call
$("#find-player").on("click", function (event) {

    // Preventing the submit button from trying to submit the form
    // We're optionally using a form so the user may hit Enter to search instead of clicking the button
    event.preventDefault();

    // Here we grab the text from the input box
    var players = $("#player-input").val();

    var queryURL = "https://www.fantasyfootballnerd.com/service/players/json/5h9gufizmccn/";

    // var queryURL = "https://www.fantasyfootballnerd.com/service" + players + "/json/5h9gufizmccn/";

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function (response) {
        // $("#player-view").text(JSON.stringify(response));
        $("#player-displayName").text(JSON.stringify(response.Players[0].displayName));
        $("#player-team").text(JSON.stringify(response.Players[0].team));
        $("#player-position").text(JSON.stringify(response.Players[0].position));
        console.log(queryURL);
        // console.log(response.Players[0].position);
    });

});

// $.ajax({
//     url: queryURL,
//     method: 'GET'
// }).done(function (response) {
//     // $("#player-view").text(JSON.stringify(response));
//     $("#player-view").text(JSON.stringify(response.Players[0].displayName));
//     console.log(queryURL);
//     console.log(response.Players[0].displayName);
// });

// });
