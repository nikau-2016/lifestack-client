var express = require('express')
const cors = require('cors')

var app = express()
var PORT = process.env.PORT || 5000

app.use(express.static(__dirname + './../public'))
app.use(cors())

app.get('/auth/twitter', function(req, res) {
  res.redirect('http://localhost:3000/auth/twitter')
})

app.get('/login/twitter/callback', function(req, res) {
  res.redirect('http://localhost:3000/auth/twitter/callback')
})

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT)
})
