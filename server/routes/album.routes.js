const Controller = require("../controllers/album.controller")

module.exports = app => {
    app.get("/findAll/albums", Controller.findAll),
    app.get("/find/:id/albums", Controller.findOne ),
    app.post("/create/albums", Controller.create )
    app.put("/edit/:id/albums", Controller.edit)
    app.delete("/destroyOne/:id/albums", Controller.destroyOne ),
    app.delete("/destroyTheDB/albums", Controller.destoryTheWorld)
}