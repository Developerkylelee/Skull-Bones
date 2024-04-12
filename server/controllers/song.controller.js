const Song = require("../models/song.model");


module.exports = {
    /// CREATE - C. rud
    create: (req, res) => {
        console.log(req.body)
        let payload = {...req.body}
        Song.create(payload)
            .then(createdSong => res.json({results: createdSong}))
            .catch(err => res.json({error: err}))
    },
    // READ - cRud - read all
    findAll: (req, res) => {
        console.log(req.body)
        Song.find()
            .then(foundSongs => {
                console.log(foundSongs)
                res.json({ results: foundSongs }) 
            }
                )
            .catch(err => res.json({error: err }))
    },
    // READ - Read One by ID
    findOne: (req, res) => {
        Song.findOne({_id: req.params.id})
            .then(oneSong => res.json({results: oneSong}))
            .catch(e => res.json({error: e}))
    
    },
    ///// UPDATE - UPDATE ONE
    edit: (req, res) => {
        Song.findByIdAndUpdate({ _id: req.params.id}, req.body, { useFindAndModify: true, runValidators: true, new: true } )
            .then(updatedSong => {
          
                res.json({results: updatedSong})
            })
            .catch(err => res.json({error: err}))
    },
    //////////
 /// DELETE ONE - D
 destroyOne: (req, res) => {
    // do whatever
    Song.findByIdAndRemove({ _id: req.params.id})
        .then(deletedObj => res.json({results: "success", data: deletedObj}))
        .catch(err => res.json({error: err}))
},
destoryTheWorld: (req, res) => {
    Song.find()
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