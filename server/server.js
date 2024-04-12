require("dotenv").config() // ALWAYS NEEDED WHEN USING DOTENV

const express = require("express")  // extracts express files from node_modules, bring in express into our project

const app = express() // creates a local instance of an express server

const cors = require("cors")
// lets our frontend talk to the backend 

const mongoose = require('mongoose') // lets our code talk to / pull data from MongoDB

// const bodyParser = require("body-parser")


const port = 8080; // define our port number for the server to run on
// 8000s are for backend/servers. 

require("./config/bones.config")

// Middleware - changes SOMETHING about the req / res objects and / or cycle
app.use(express.json(), express.urlencoded({ extended: true })); 
// allows us to parse json out of reqs - urlencoded allows us to parse out and parse data into URLS. 
app.use(cors()); // just activating the code that allow our frontend to talk to the backend


// const Routes = require("./routes/album.routes", "./routes/song.routes", "./routes/movie.routes", "./routes/game.routes", "./routes/show.routes")
const songRoutes = require("./routes/song.routes")
const gameRoutes = require("./routes/game.routes")
const albumRoutes = require("./routes/album.routes")
const movieRoutes = require("./routes/movie.routes")
const showRoutes = require("./routes/show.routes")
const userRoutes = require("./routes/user.routes")

songRoutes(app)
gameRoutes(app)
albumRoutes(app)
songRoutes(app)
movieRoutes(app)
showRoutes(app)
userRoutes(app)

// const db = "Skull&Bones" // connects to db @ mongodb://127.0.0.1/


// mongoose.connect(process.env.MONGO_URI + db,
//     { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log(`Breaking Bones!!!! --- Connected to ${db}`))
//     .catch(err => console.error(err))



    
    // let { Schema, model } = mongoose
    
/////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////        SONG SCHEMA       ////////////////////////////////

// let SongSchema = new Schema({
//     artist: String,
//     title: String,
//     length: String,
//     price: String,
//     released: String,
//     genre: String,
//     album: String,
//     added: Date
// })

// let Song = model("Song", SongSchema)

  //////////////////////////      END OF SONG SCHEMA ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////        MOVIE SCHEMA       ////////////////////////////////

// let MovieSchema = new Schema({
   
//     title: String,
//     genre: [String],
//     length: String,
//     price: String,
//     released: String,
//     rated: String,
//     plot: String,
//     cast: [String],
//     director: String,
//     added: Date
// })

// let Movie = model("Movie", MovieSchema)

////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////   END OF MOVIE SCHEMA       ////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////        SHOW SCHEMA       ////////////////////////////////

// let ShowSchema = new Schema({
   
//     title: String,
//     genre: [String],
//     released: String,
//     rated: String,
//     length: String,
//     price: String,
//     plot: String,
//     cast: [String],
//     director: String,
//     season: Number,
//     episodes: [Number],
//     added: Date
// })

// let Show = model("Show", ShowSchema)

////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////   END OF SHOW SCHEMA       ////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////        GAME SCHEMA       ////////////////////////////////

// let GameSchema = new Schema({
   
//     title: String,
//     genre: String,
//     info: String,
//     size: String,
//     rating: String,
//     price: String,
//     added: Date
// })

// let Game = model("Game", GameSchema)

////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////   END OF GAME SCHEMA       ////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////        ALBUM SCHEMA       ////////////////////////////////

// let AlbumSchema = new Schema({
//     title: String,
//     artist: String,
//     amount: Number,
//     length: String,
//     price: String,
//     released: String,
//     genre: String,
//     songs: [String],
//     added: Date
// })

// let Album = model("Album", AlbumSchema)

  //////////////////////////      END OF SONG SCHEMA ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////        USER SCHEMA       ////////////////////////////////

// let UserSchema = new Schema({
//     firstName: String,
//     lastName: String,
//     userName: String,
//     password: String,
//     credits: Number,
//     released: String,
//     admin: Boolean,
//     cardInfo: {
//         name: String,
//         number: Number,
//         date: String,
//         cvc: Number
//     },
//     added: Date
// })

// let User = model("User", UserSchema)

  //////////////////////////      END OF USER SCHEMA ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////TEST\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// app.get("/", (req, res) => {
//     // console.log("req", req)
//     res.send("WTF")
// })
/////////////////////////////////////END OF TEST\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////POST FOR SONG\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// app.post("/api/songs", (req, res) => {
//     console.log("req.body", req.body)
//     let newSong = new Song(req.body)
//     newSong.save()
//     .then(created => {
//         console.log("created", created)
//         res.json({"message": "created"})
//     })
//     .catch(err => console.log("err", err))
    
    // newSong.save((err, created) => {
    //     console.log("created|", created)
    //     err ? res.json({"message": "Failed"}) : res.json({"message":  "Success"})
    // })
    
    
// })

////////////////////////////////END OF POST FOR SONG\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////POST FOR ALBUM\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// app.post("/api/albums", (req, res) => {
//     console.log("req.body", req.body)
//     let newAlbum = new Album(req.body)
//     newAlbum.save((err, created) => {
//         err ? res.json({"message": "Failed"}) : res.json({"message":  "Success"})
//     })
    
    
// })

////////////////////////////////END OF POST FOR ALBUM\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////POST FOR MOVIE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// app.post("/api/movies", (req, res) => {
//     console.log("req.body", req.body)
//     let newMovie = new Movie(req.body)
//     newMovie.save((err, created) => {
//         err ? res.json({"message": "Failed"}) : res.json({"message":  "Success"})
//     })
    
    
// })

////////////////////////////////END OF POST FOR MOVIE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////POST FOR SHOW\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// app.post("/api/shows", (req, res) => {
//     console.log("req.body", req.body)
//     let newShow = new Show(req.body)
//     newShow.save((err, created) => {
//         err ? res.json({"message": "Failed"}) : res.json({"message":  "Success"})
//     })
    
    
// })

////////////////////////////////END OF POST FOR SHOW\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////POST FOR USER\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// app.post("/api/users", (req, res) => {
//     console.log("req.body", req.body)
//     let newUser = new User(req.body)
//     newUser.save((err, created) => {
//         err ? res.json({"message": "Failed"}) : res.json({"message":  "Success"})
//     })
    
    
// })

////////////////////////////////END OF POST FOR USER\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////POST FOR GAME\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// app.post("/api/games", (req, res) => {
//     console.log("req.body", req.body)
//     let newGame = new Game(req.body)
//     newGame.save((err, created) => {
//         err ? res.json({"message": "Failed"}) : res.json({"message":  "Success"})
//     })
    
    
// })

////////////////////////////////END OF POST FOR GAME\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



/////////////////////////////////////////LISTENING ON\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


/// actually running the server and having it listen for our requests
app.listen(process.env.PORT , () => console.log(`Server is running on port ${process.env.PORT}`));

///////////////////////////////////END OF LISTENING ON\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

