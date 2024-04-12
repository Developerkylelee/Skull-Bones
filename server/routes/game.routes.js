const Controller = require("../controllers/game.controller")

module.exports = app => {
    app.get("/findAll/games", Controller.findAll),
    app.get("/find/:id/games", Controller.findOne ),
    app.post("/create/games", Controller.create )
    app.put("/edit/:id/games", Controller.edit)
    app.delete("/destroyOne/:id/games", Controller.destroyOne ),
    app.delete("/destroyTheDB/games", Controller.destoryTheWorld)
}