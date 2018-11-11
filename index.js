var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hell      o worlds of the world')
})
var port =  process.env.PORT || 3000
if (!module.parent) {
    app.listen(port, function () {
        console.log("listening on port"+port+"!")
    })
}

module.exports = app
