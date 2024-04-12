const Controller = require("../controllers/movie.controller")

module.exports = app => {
    app.get("/findAll/movies", Controller.findAll),
    app.get("/find/:id/movies", Controller.findOne ),
    app.post("/create/movies", Controller.create )
    app.put("/edit/:id/movies", Controller.edit)
    app.delete("/destroyOne/:id/movies", Controller.destroyOne ),
    app.delete("/destroyTheDB/movies", Controller.destoryTheWorld)
}