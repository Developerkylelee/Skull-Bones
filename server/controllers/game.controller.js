const Game = require("../models/game.model");


module.exports = {
    /// CREATE - C. rud
    create: (req, res) => {
        console.log(req.body)
        let payload = {...req.body}
        Game.create(payload)
            .then(createdGame => res.json({results: createdGame}))
            .catch(err => res.json({error: err}))
    },
    // READ - cRud - read all
    findAll: (req, res) => {
        Game.find()
            .then(foundGames => res.json({ results: foundGames }) )
            .catch(err => res.json({error: err }))
    },
    // READ - Read One by ID
    findOne: (req, res) => {
        Game.findOne({_id: req.params.id})
            .then(oneGame => res.json({results: oneGame}))
            .catch(e => res.json({error: e}))
    
    },
    ///// UPDATE - UPDATE ONE
    edit: (req, res) => {
        Game.findByIdAndUpdate({ _id: req.params.id}, req.body, { useFindAndModify: true, runValidators: true, new: true } )
            .then(updatedGame => {
          
                res.json({results: updatedGame})
            })
            .catch(err => res.json({error: err}))
    },
    //////////
 /// DELETE ONE - D
 destroyOne: (req, res) => {
    // do whatever
    console.log("Destroy!")
    Game.findByIdAndRemove({ _id: req.params.id})
        .then(deletedObj => res.json({results: "success", data: deletedObj}))
        .catch(err => res.json({error: err}))
},
destoryTheWorld: (req, res) => {
    Game.find()
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