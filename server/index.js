require('dotenv').config()
const massive = require('massive')
const express = require('express')
const app = express()
const ctrl = require('./controller')
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

app.use(express.json())

app.post('/api/auth/register', ctrl.register)
app.post('/api/auth/login', ctrl.login)
app.get('/api/posts/:userid', ctrl.retrievePosts)
app.get('/api/post/:postid', ctrl.retrievePost)
app.post('/api/post/:userid', ctrl.newPost)

app.listen(SERVER_PORT, () => console.log(`Port ${SERVER_PORT}, I am your father!`))

