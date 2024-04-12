const Show = require("../models/show.model");


module.exports = {
    /// CREATE - C. rud
    create: (req, res) => {
        console.log(req.body)
        let payload = {...req.body}
        Show.create(payload)
            .then(createdShow => res.json({results: createdShow}))
            .catch(err => res.json({error: err}))
    },
    // READ - cRud - read all
    findAll: (req, res) => {
        Show.find()
            .then(foundShows => res.json({ results: foundShows }) )
            .catch(err => res.json({error: err }))
    },
    // READ - Read One by ID
    findOne: (req, res) => {
        Show.findOne({_id: req.params.id})
            .then(oneShow => res.json({results: oneShow}))
            .catch(e => res.json({error: e}))
    
    },
    ///// UPDATE - UPDATE ONE
    edit: (req, res) => {
        Show.findByIdAndUpdate({ _id: req.params.id}, req.body, { useFindAndModify: true, runValidators: true, new: true } )
            .then(updatedShow => {
          
                res.json({results: updatedShow})
            })
            .catch(err => res.json({error: err}))
    },
    //////////
 /// DELETE ONE - D
 destroyOne: (req, res) => {
    // do whatever
    console.log("Destroy!")
    Show.findByIdAndRemove({ _id: req.params.id})
        .then(deletedObj => res.json({results: "success", data: deletedObj}))
        .catch(err => res.json({error: err}))
},
destoryTheWorld: (req, res) => {
    Show.find()
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