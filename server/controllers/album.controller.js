const Album = require("../models/album.model");


module.exports = {
    /// CREATE - C. rud
    create: (req, res) => {
        console.log(req.body)

        let payload = {...req.body}

        Album.create(payload)
            .then(createdAlbum => res.json({results: createdAlbum}))
            .catch(err => res.json({error: err}))
    },
    // READ - cRud - read all
    findAll: (req, res) => {
        Album.find()
            .then(foundAlbums => res.json({ results: foundAlbums }) )
            .catch(err => res.json({error: err }))
    },
    // READ - Read One by ID
    findOne: (req, res) => {
        Album.findOne({_id: req.params.id})
            .then(oneAlbum => res.json({results: oneAlbum}))
            .catch(e => res.json({error: e}))
    
    },
    ///// UPDATE - UPDATE ONE
    edit: (req, res) => {
        Album.findByIdAndUpdate({ _id: req.params.id}, req.body, { useFindAndModify: true, runValidators: true, new: true } )
            .then(updatedAlbum => {
          
                res.json({results: updatedAlbum})
            })
            .catch(err => res.json({error: err}))
    },
    //////////
 /// DELETE ONE - D
 destroyOne: (req, res) => {
    // do whatever
    console.log("Destroy!")
    Album.findByIdAndRemove({ _id: req.params.id})
        .then(deletedObj => res.json({results: "success", data: deletedObj}))
        .catch(err => res.json({error: err}))
},
destoryTheWorld: (req, res) => {
    Album.find()
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