const express = require('express')
const routes = express.Router()
const instructors = require('./instructors')
routes.get('/', function(rec,res){
    return res.redirect("/instructors")
})

routes.get('/instructors', function(rec,res){
    return res.render("instructors/index");
})

routes.get('/instructors/create', function(rec,res){
    return res.render("instructors/create");
})
routes.post("/instructors", instructors.post)

routes.get('/members', function(rec,res){
    return res.send("members");
})


module.exports = routes;