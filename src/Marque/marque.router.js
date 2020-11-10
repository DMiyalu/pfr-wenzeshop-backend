const { response } = require('express');
const express = require('express');
const router = express.Router()
const modelMarque = require('./marque.model')


router.get('/', async(request, response) => {
    //get all marque product
    await modelMarque.find()
    .then((data) => {
        if (data) {
            response.status(200).json(data)
        }
    })
    .catch((error) => {
        response.status(500).json({
            message: error.message || "Une erreur est survenue lors de la demande."
        })
    })
})

router.post('/', async(request, response) => {
    //post a marque product
    const { title, description } = request.body
    const marque = new modelMarque({title: title, description: description})
    await marque.save()
    .then((data) => {
        if (data) {
            response.status(200).json({
                message: "Element ajouté !",
                data: data
            })
        }
    })
    .catch((error) => {
        response.status(500).json({
            message: error.message || "Une erreur est survenue lors de la demande."
        })
    })
})


router.get('/:_id', async(request, response) => {
    const { _id } = request.params
    await modelMarque.findById(_id)
    .then((data) => {
        if(!data) {
            response.status(404).json({
                message: "Recherche sans succès! L'élément n'a pas été trouvé."
            })
        } else {
            response.status(404).json({
                message: "Success !",
                data: data
            })
        }
    })
    .catch((error) => {
        response.status(500).json({
            message: error.message || "Une erreur est survenue lors de la demande"
        })
    })
})
module.exports = router