const express = require('express')
const app = express()
const path = require("path")

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use(express.static('public'))

app.get('/', function(req, res) {
  res.render('index.ejs')
})
  
app.listen(8080, () => {console.log('ready!')})