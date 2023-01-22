const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('json-web-token')


router.post('/', async (req, res) => {
    console.log('Inside authorization', req.body)
    let user = await User.findOne({ username: req.body.username })
    console.log(user)

    if (!user || !await bcrypt.compare(req.body.password, user.password)) {
        console.log('Could not find user or password did not work')
        res.status(404).json({ 
            message: `Could not find a user with the provided username and password` 
        })
    } else {
        console.log('Found user')
        const result = await jwt.encode(process.env.JWT_SECRET, { id: user._id})
        console.log(result)
        res.json({ user: user, token: result.value })                                       
    }
})

router.get('/profile', async (req, res) => {
    try {
        // Split the authorization header into [ "Bearer", "TOKEN" ]:
        const [authenticationMethod, token] = req.headers.authorization.split(' ')

        // Only handle "Bearer" authorization for now 
        //  (we could add other authorization strategies later):
        if (authenticationMethod == 'Bearer') {

            // Decode the JWT
            const result = await jwt.decode(process.env.JWT_SECRET, token)

            // Get the logged in user's id from the payload
            const { id } = result.value

            // Find the user object using their id:
            let user = await User.findOne({
                _id:id
            })
            console.log(user)
            res.status(200).json(user)
        }
    } catch {
        res.status(404).json(null)
    }
})


module.exports = router;