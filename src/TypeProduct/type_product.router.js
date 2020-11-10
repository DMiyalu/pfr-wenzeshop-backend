const express = require('express');
const router = express.Router()
const modelTypeProduct = require('./type_product.model')


router.get('/', async(request, response) => {
    await modelTypeProduct.find()
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
    const { title } = request.body
    const type_product = new modelTypeProduct({title: title})
    await type_product.save()
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