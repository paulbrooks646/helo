const bcrypt = require('bcrypt')

module.exports = {

    register: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body

        const existingUser = await db.check_user(username)
        if(existingUser[0]) {
        return res.status(409).send("User already exists!")
        } 
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = await db.register_user([username, hash])

        req.session.user = {
            id: newUser[0].id,
            username: newUser[0].username    
        }
        res.status(200).send(req.session.user)
    },


    login: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        
        const user = await db.check_user(username)
        if (!user[0]) {
            return res.status(404).send("User does not exist")}
            else { const authenticated = bcrypt.compareSync(password, user[0].password)
            if (authenticated) {
                req.session.user = {
                 id: user[0].id,
                 username: user[0].username
                }
                res.status(200).send(req.session.user)
            } else {
                res.status(403).send('Username or password incorrect!')
            }}
        },
    retrievePosts: async (req, res) => {
        const db = req.app.get('db')
    },
    retrievePost: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
    },
    newPost: async (req, res) => {
        const db = req.app.get('db')
        const {title, img, content, author_id} = req.body
    }

}



