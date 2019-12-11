var Spotify = require('node-spotify-api');
require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);


const song = function (input) {
    spotify
        .search({ type: 'track', query: process.argv[3] || "The Sign ace of base", limit: `1` })
        .then(function (response) {
            //console.log(JSON.stringify(response, null, 2));
            console.log(response.tracks.items[0].album.artists[0].name);
            console.log(response.tracks.items[0].name);
            console.log(response.tracks.items[0].album.name);
            console.log(response.tracks.items[0].external_urls.spotify);
        })
        .catch(function (err) {
            console.log(err);
        });
}

const concert = function (input) {

}


const movie = function (input) {

}

switch (process.argv[2]) {
    // case "concert-this":
    //     concert(process.argv[3])
    //     break;

    case "spotify-this-song":
        song(process.argv[3])
        break;

    // case "movie-this":
    //     movie(process.argv[3])
    //     break;

    // case "do-what-it-says":
    //     randomTxt()
    //     break;

    default:
        break;
}