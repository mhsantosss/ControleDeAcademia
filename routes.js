const express = require('express')
const routes = express.Router()

routes.get('/', function(rec,res){
    return res.redirect("/instructors")
})

routes.get('/instructors', function(rec,res){
    return res.render("instructors/index");
})

routes.get('/members', function(rec,res){
    return res.send("members");
})


module.exports = routes;