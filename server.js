const express = require('express')
// Make an express server
const app = express()
// This tell the server to listen for HTTP requests
console.log(__dirname)

app.use(express.static(__dirname + '/public'))
// this tells my server to expose the public folder to the WWW

let counter = 0

function increment () {
  counter = counter + 1
}

function decrement () {
  counter = counter - 1
}

app.post('/POST/increment', function (req, res, nextFn) {
  console.log('I am sending a post request to /post/increment')
  console.log(counter)
  increment()
  console.log(counter)
})

app.post('/POST/decrement', function (req, res, nextFn) {
  console.log('I am sending a post request to /post/decrement')
  console.log(counter)
  decrement()
  console.log(counter)
})

app.get('/GET/value', function (req, res, nextFn) {
  console.log('I am sending a post request to /get/value')
  res.json(counter)
})

app.listen(3000, function () {
  console.log('server is listening...')
})
