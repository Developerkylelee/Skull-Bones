const mongoose = require('mongoose'); // the software we need to actually define the objects strucutre for MongoDB/

const GameSchema = new mongoose.Schema({
    // define the strucutre, and validation requirements of this type of object

    title: {
        type: String,
        required: [true, "Title is required"],
        min: [3, "Min length of "]
    },
    genre: {
        type: String,
        required: [true, "A valid genre is required!"]
    },
    info: {
        type: String,
        required: [true, "Info is required"],
        min: [3, "Min length of "]
    },
    size: {
        type: String,
        required: [true, "Info is required"],
        min: [3, "Min length of "]
    },
    rating: {
        type: String,
        required: [true, "Rating is required"],
        min: [1, "Min length of "]
    },
    price: {
        type: Number,
        required: [true, "Rating is Required"],
    },
    // Timestamp: true,

    OwnerId: {
        type: String
    },
    createdAt: {
        type: Date,
        required: true,
        immutable: true,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        required: true
    }
})

//convert the schema into an actual model - inits the database to recieve that data.
const Game = mongoose.model("Game", GameSchema)

module.exports = Game;