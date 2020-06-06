require('dotenv').config()
const massive = require('massive')
const express = require('express')
const app = express()
const ctrl = require('./controller.js')
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env
const session = require('express-session')

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie : {maxAge: 1000 * 60 * 60 * 24},
    secret: SESSION_SECRET
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then( db => {
    app.set('db', db)
    console.log(`Someday I'll find it, the db connection!`)
    app.listen(SERVER_PORT, () => console.log(`Port ${SERVER_PORT}, I am your father!`))
}).catch(err => console.log(err))


app.post('/api/auth/register', ctrl.register)
app.post('/api/auth/login', ctrl.login)
app.get('/api/posts/:userid', ctrl.retrievePosts)
app.get('/api/post/:postid', ctrl.retrievePost)
app.post('/api/post/:userid', ctrl.newPost)
app.delete('/api/logout', ctrl.logout)


