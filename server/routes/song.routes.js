const Controller = require("../controllers/song.controller")

module.exports = app => {
    app.get("/findAll/songs", Controller.findAll),
    app.get("/find/:id/songs", Controller.findOne),
    app.post("/create/songs", Controller.create )
    app.put("/edit/:id/songs", Controller.edit)
    app.delete("/destroyOne/:id/songs", Controller.destroyOne ),
    app.delete("/destroyTheDB/songs", Controller.destoryTheWorld)
}

// http://localhost:8080/findAll/songs