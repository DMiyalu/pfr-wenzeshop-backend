const express = require('express');
const router = express.Router()
const modelCommande = require('./commande.model')


router.get('/', async(request, response) => {
    await modelCommande.find()
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
    const { montant, user } = request.body
    const commande = new modelCommande({montant: montant, user: user})
    await commande.save()
    .then(data => {
        if(data) {
            response.json({
                message: "Commande sauvegardée !.",
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