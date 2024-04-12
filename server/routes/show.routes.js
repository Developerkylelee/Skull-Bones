const Controller = require("../controllers/show.controller")

module.exports = app => {
    app.get("/findAll/shows", Controller.findAll),
    app.get("/find/:id/shows", Controller.findOne ),
    app.post("/create/shows", Controller.create )
    app.put("/edit/:id/shows", Controller.edit)
    app.delete("/destroyOne/:id/shows", Controller.destroyOne ),
    app.delete("/destroyTheDB/shows", Controller.destoryTheWorld)
}