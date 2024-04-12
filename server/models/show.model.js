const mongoose = require('mongoose'); // the software we need to actually define the objects strucutre for MongoDB/

const ShowSchema = new mongoose.Schema({ // define the strucutre, and validation requirements of this type of object

    title: {
        type: String,
        required: [true, "Title is required"],
        min: [3, "Min length of "]
    },
    genre: {
        type: String,
        required: [true, "A valid genre is required!"]

    },
    released: {
        type: String,
        required: [true, "Released is required"]
    },
    rating: {
        type: String,
        required: [true, "Rating is required"],
        min: [1, "Min length of "]
    },
    length: {
        type: Number,
        required: [true, "Length is required"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    plot: {
        type: String,
        required: [true, "Plot is required"]
    },
    cast: {
        type: [String],
        required: [true, "Cast is required"]
    },
    director: {
        type: String,
        required: [true, "Director is required"]
    },
    season: {
        type: [Number],
        required: [true, "Season is required"]
    },
    episodes: {
        type: [Number],
        required: [true, "Episode is required"]
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
const Show = mongoose.model("Show", ShowSchema)

module.exports = Show;