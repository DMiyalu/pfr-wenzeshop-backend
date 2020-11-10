const express = require('express');
const router = express.Router()
const modelAdresse = require('./adresse.model')


router.get('/', async(request, response) => {
    await modelAdresse.find()
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


router.post('/', async(request, response) => {
    const { numero, rue, quartier, commune, ville, reference } = request.body
    const adresse = new modelAdresse({
        numero: numero,
        rue: rue, 
        quartier: quartier, 
        commune: commune, 
        ville: ville, 
        reference: reference
    })
    await adresse.save()
    .then(data => {
        if(data) {
            response.json({
                message: "Sauvegarde réussi! Le produit est maintenant present dans le stock.",
                data: data
            })
        }
    })
    .catch(error => {
        response.status(500).send({
            message: error.message || "Une erreur s'est produite lors du sauvegarde"
        })
    })
})

module.exports = router