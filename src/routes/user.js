const express = require('express')
const router = express.Router()
const modelUser = require('../models/user')
const jwt = require('jsonwebtoken')
const configToUse = require('../../config/keys')



function verifyToken(request, response, next) {
    console.log('verifyToken start')
    // Get auth header value
    const bearerHeader = request.headers['authorization']
    if(typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ')
        // Get token from array
        const bearerToken = bearer[1]
        // Set the token
        request.token = bearerToken
        next()
    } else {
        // FORBIDDEN
        response.status(403)
    }
}


router.get('/', async(request, response) => {
    console.log("Get all users.", request.params);
    await modelUser.find()
    .then((data) => {
        if(data) {
            response.status(200).json(data)
        }
    })
    .catch((error) => {
        response.status(500).json({
            message: error.message || "Une erreur est survenue lors de la demande."
        })
    })
})


router.post('/', verifyToken, (request, response) => {
    console.log('verify into post route')
    jwt.verify(request.token, configToUse.jwtSecret, async(error, authData) => {
        if(error) {
            response.sendStatus(403)
        } else {
            console.log("Create user")
            const { email, password } = request.body
            const user = new modelUser({email: email, password: password})
            await user.save()
            .then(data => {
                if(data) {
                    response.json({
                        message: "Creation compte réussi!",
                        data: data
                    })
                }
            })
            .catch(error => {
                response.status(500).send({
                    message: error.message || "Une erreur s'est produite lors de la creation du compte."
                })
            })
        }
    })
    
})

router.post('/login', (require, response) => {
    const { email, password } = require.body
    const user = {email: email, password: password}

    jwt.sign({user: user}, configToUse.jwtSecret, (error, token) => {
        response.json({
            token
        })
    })
})

module.exports = router