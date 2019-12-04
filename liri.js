require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);




switch (process.argv[2]) {
    case "concert-this":
        concert(process.argv[3])
        break;

    case "spotify-this-song":
        song(process.argv[3])
        break;

    case "movie-this":
        movie(process.argv[3])
        break;

    case "do-what-it-says":
        randomTxt()
        break;

    default:
        break;
}