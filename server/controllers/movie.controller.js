const Movie = require("../models/movie.model");


module.exports = {
    /// CREATE - C. rud
    create: (req, res) => {
        console.log(req.body)
        let payload = {...req.body}
        Movie.create(payload)
            .then(createdMovie => res.json({results: createdMovie}))
            .catch(err => res.json({error: err}))
    },
    // READ - cRud - read all
    findAll: (req, res) => {
        Movie.find()
            .then(foundMovies => res.json({ results: foundMovies }) )
            .catch(err => res.json({error: err }))
    },
    // READ - Read One by ID
    findOne: (req, res) => {
        console.log(req.params)
        Movie.findOne({_id: req.params.id})
            .then(oneMovie => res.json({results: oneMovie}))
            .catch(e => res.json({error: e}))
    
    },
    ///// UPDATE - UPDATE ONE
    edit: (req, res) => {
        Movie.findByIdAndUpdate({ _id: req.params.id}, req.body, { useFindAndModify: true, runValidators: true, new: true } )
            .then(updatedMovie => {
          
                res.json({results: updatedMovie})
            })
            .catch(err => res.json({error: err}))
    },
    //////////
 /// DELETE ONE - D
 destroyOne: (req, res) => {
    // do whatever
    console.log("Destroy!")
    Movie.findByIdAndRemove({ _id: req.params.id})
        .then(deletedObj => res.json({results: "success", data: deletedObj}))
        .catch(err => res.json({error: err}))
},
destoryTheWorld: (req, res) => {
    Movie.find()
        .then(everything => {
            console.log(everything)
            Song.deleteMany({ _id: {$in: everything.map(item => item._id) }})
                .then(result => res.json({ results: "success", data: result }))
                .catch(err => res.json({error: err}))
        })
        .catch(err => res.json({error: err}))
},





//////////
keyIsHere: "Value is here"
}