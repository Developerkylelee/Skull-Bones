const User = require("../models/user.model");
const bcrypt = require("bcrypt");

module.exports = {
    /// CREATE - C. rud
    // create: (req, res) => {
    //     console.log(req.body)
    //     let payload = {...req.body}
    //     User.create(payload)
    //         .then(createdUser => res.json({results: createdUser}))
    //         .catch(err => res.json({error: err}))
    // },


    // create: (req, res) => {
    //     console.log(req.body)
    //     User.find({ username: req.body.username })
    //      .then(found => {
    //          console.log("found", found)
    //          if(!found.length){
    //              User.create(req.body)
    //              .then(created => {
    //                  console.log("created", created)
    //              })
    //          }
    //      })
    // },

    create: (req, res) => {
        console.log(req.body)
        User.find({ username: req.body.username })
            .then(found => {
                console.log("found", found)
                if (found.length) {
                    res.json({ message: "User Exists" })
                } else {
                    const hash = bcrypt.hashSync(req.body.password, 10)
                    const newUser = {
                        username: req.body.username,
                        password: hash,
                        age: req.body.age,
                        email: req.body.email,
                        first: req.body.first,
                        last: req.body.last
                    }


                    User.create(newUser)
                        .then(created => {
                            console.log("CREATED", created)
                            res.json({ message: "User Created", user: created })
                        })
                        .catch(err => res.json({ error: err })) // this catch is catching errors of the db query , NOT of the req. - so even if the db query errors out - we still need to res. to close the req/res loop
                }
            })
            .catch(err => res.json({ error: err })) // this is catching ur initial Find
    },



    // READ - cRud - read all
    findAll: (req, res) => {
        User.find()
            .then(foundUsers => res.json({ results: foundUsers }))
            .catch(err => res.json({ error: err }))
    },


    // READ - Read One by ID
    // findOne: (req, res) => {

    //     User.findOne({ _id: req.params.id })
    //         .then(oneUser => res.json({ results: oneUser }))
    //         .catch(e => res.json({ error: e }))

    // },


    findOne: (req, res) => {
        console.log(req.body)
        User.findOne({ username: req.body.username })
            .then(found => {
                console.log("FOUND", found)
                if (found) {
                    if (!bcrypt.compareSync(req.body.password, found.password)) {
                        res.json({ message: "Bad Password" })
                    } else {
                        res.json({ message: "Success", user: found })
                    }
                }
            }).catch(err => console.log('findOne error', err))

    },
    addFunds: (req, res) => {
        console.log("addans", req.body, req.params.id)
        User.findOne({ _id: req.params.id })
            .then(found => {
                console.log("found", found)
                found.credits += parseInt(req.body.credits)
                found.save()
            })
            .catch(err => console.log("err", err))
            
        },



            

            //     console.log("found", found)
            //     /// ok here we found the right doc, but now need to find the right ANSWER within its array..
            //     // not sure what ur solution will be be 
            //     found.answers = found.answers.map((item) => {
            //         if (item.answer === req.body.answer) {
            //             let out = {...item, likes: item.likes + 1}
            //             return out
            //         } 
            //         return item;
            //     })
            //     // found.answers.likes += 1
            //     found.save()
            //         .then(updatedLikes => {
            //             res.json({msg: "Succecss", data: updatedLikes})
            //         })
            //         .catch(err => res.json({msg: "error", code: 400, error: err }))

            // })
            // .catch(err => console.log("err", err))



    ///// UPDATE - UPDATE ONE
    edit: (req, res) => {
        User.findByIdAndUpdate({ _id: req.params.id }, req.body, { useFindAndModify: true, runValidators: true, new: true })
            .then(updatedUser => {

                res.json({ results: updatedUser })
            })
            .catch(err => res.json({ error: err }))
    },
    //////////
    getUser: (req, res) => {

        User.findById(req.params.id)
            .then(found => res.json(found))
            .catch(err => console.log('get user error', err))
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

//////////
keyIsHere: "Value is here"
}