
var Trackster = {};
const API_KEY = "1454f041de2b7fc055633de98ee7f704";

$(document).ready(function() {
  $("#searchbutton").click(function() {
    Trackster.searchTracksByTitle($("#searchinput").val())
  });
});



/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    url: "http://ws.audioscrobbler.com/2.0/?method=track.search&track=" + title + '&api_key=' + API_KEY + "&format=json" ,
    success: console.log()
  })
};
