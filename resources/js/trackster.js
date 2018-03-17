
var Trackster = {};
const API_KEY = "1454f041de2b7fc055633de98ee7f704";

$(document).ready(function() {
  $("#searchbutton").click(function() {
    Trackster.searchTracksByTitle($("#searchinput").val())
  });




/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {
  $('.results').empty();

  for (var i = 0 ; i < tracks.length; i++){
    var track = tracks[i];
    var mediumAlbumArt =track.image[1]["#text"]
    var trackInfo =
    `<div class="row infoline ">` +
    `   <div class="col-xs-1 col-xs-offset-1">` +
    `    <a href="`+ track.url + `" target="_blank">` +
    `    <i class="fa fa-play-circle-o fa-2x"></i></a>` +
    `   </div>` +
    `  <div class="col-xs-4">` + track.name + `</div>` +
    `  <div class="col-xs-2">` + track.artist + `</div>` +
    `  <div class="col-xs-2"><img src=`+ mediumAlbumArt + `/></div>` +
    `  <div class="col-xs-2">` + track.Popularity + `</div>` +
    `</div>`;
$(".results").append(trackInfo);
  }
};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    url: "http://ws.audioscrobbler.com/2.0/?method=track.search&track=" + title + '&api_key=' + API_KEY + "&format=json" ,
    success: function(response) {
      Trackster.renderTracks(response.results.trackmatches.track);
    }
  })
};

});
