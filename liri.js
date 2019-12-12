var Spotify = require('node-spotify-api');
var axios = require("axios");
require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);


const song = function (input) {
    spotify
        .search({ type: 'track', query: input || "The Sign ace of base", limit: `1` })
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

    var queryUrl = "http://www.omdbapi.com/?t=" + input || "Mr. Nobody" + "&y=&plot=short&apikey=trilogy";
    axios.get(queryUrl).then(
        function (response) {
            console.log("Release Year: " + response.data.Year);
        })
        .catch(function (error) {
            if (error.response) {
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}

switch (process.argv[2]) {
    // case "concert-this":
    //     concert(process.argv[3])
    //     break;

    case "spotify-this-song":
        song(process.argv[3])
        break;

    case "movie-this":
        movie(process.argv[3])
        break;

    // case "do-what-it-says":
    //     randomTxt()
    //     break;

    default:
        break;
}