const mongoose = require('mongoose'); // the software we need to actually define the objects strucutre for MongoDB/

const SongSchema = new mongoose.Schema({
// define the strucutre, and validation requirements of this type of object

    artist: {
        type: String,
        // required: [true, "Artist is required"],
        min: [3, "Min length of "]
    },
    title: {
        type: String,
        // required: [true, "Title is required"],
        min: [3, "Min length of "]
    },
    length: {
        type: Number,
        // required: [true, "Length is required"]
    },
    price: {
        type: Number,
        // required: [true, "Price is required"]
    },
    released: {
        type: String,
        // required: [true, "Released is required"]
    },
    genre: {
        type: String,
        // required: [true, "A valid genre is required!"]
    },
    album: {
        type: String,
        // required: [true, "Album is required"],
        min: [3, "Min length of "]
    },
    // Timestamp: true,

    // OwnerId: {
    //     type: String
    // },
    // createdAt: {
    //     type: Date,
    //     required: true,
    //     immutable: true,
    //     default: new Date()
    // },
    // updatedAt: {
    //     type: Date,
    //     required: true
    // }
})


//convert the schema into an actual model - inits the database to recieve that data.
const Song = mongoose.model("Song", SongSchema)

module.exports = Song;