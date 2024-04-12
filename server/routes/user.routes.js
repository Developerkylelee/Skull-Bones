const Controller = require("../controllers/user.controller")

module.exports = app => {
    app.get("/findAll/user", Controller.findAll),
    app.get("/find/:id/user", Controller.findOne),
    app.post("/find/user", Controller.findOne),
    app.post("/create/user", Controller.create ),
    app.put("/edit/:id/user", Controller.edit),
    app.get('/getUser/:id', Controller.getUser),
    app.post("/user/:id", Controller.addFunds)
}