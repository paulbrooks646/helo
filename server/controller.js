module.exports = {

    register: async (req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body
    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body
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



