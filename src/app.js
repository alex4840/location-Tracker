const express = require('express');
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get("/", function(req, res){
    res.render("index");
});

module.exports = app;
