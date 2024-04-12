const mongoose = require('mongoose'); // the software we need to actually define the objects strucutre for MongoDB/

const UserSchema = new mongoose.Schema({ // define the strucutre, and validation requirements of this type of object

    first: {
        type: String,
        // required: [true, "First name is required"],
        // min: [2, "Min length of "]
    },
    last: {
        type: String,
        // required: [true, "Last name is required"],
        // min: [2, "Min length of "]
    },
    username: {
        type: String,
        // required: [true, "Username is required"],
        // min: [8, "Min length of "]
    },
    password: {
        type: String,
        // required: [true, "Password is required"],
        // min: [8, "Min length of "]
    },
    age: {
        type: Number
    },
    email: {
        type: String
    },
    credits: Number,
    // admin: Boolean,
    // cardInfo: {
    //     name: {
    //         type: String,
    //         required: [true, "Name is required"],
    //         min: [2, "Min length of "]
    //     },
    //     number: {
    //         type: String,
    //         required: [true, "Card Number is required"],
    //         min: [12, "Min length of"]
    //     },
    //     month: {
    //         type: Number,
    //         required: [true, "Month is required"]
    //     },
    //     year: {
    //         type: Number,
    //         required: [true, "Year is required"]
    //     },
    //     zipcode: {
    //         type: Number,
    //         required: [true, "Year is required"]
    //     },
    //     cvc: {
    //         type: Number,
    //         required: [true, "Year is required"]
    //     }
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
const User = mongoose.model("User", UserSchema )

module.exports = User;