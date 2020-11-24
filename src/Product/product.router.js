const express = require('express');
const router = express.Router()
const modelProduct = require('./product.model')


router.get('/', async(request, response) => {
    console.log("Get all product.", request.params);
    await modelProduct.find()
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
    console.log("Post a product");
    const { title, description, price, unite, marque, categorie, image } = request.body
    const product = new modelProduct({title: title, description: description, price: price, unite: unite, marque: marque, categorie: categorie, image: image})
    await product.save()
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

router.get('/:_id', async(request, response) => {
    console.log("Get one product");
    const { _id } = request.params
    await modelProduct.findById(_id)
    .then((data) => {
        if(!data) {
            response.status(404).json({
                message: "Recherche sans succès! Le produit n'a pas été trouvé."
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

router.delete('/:_id', async(request, response) => {
    console.log("Delete one product")
    const { _id } = request.params
    await modelProduct.findOneAndDelete({ _id })
    .then((data) => {
        if(!data) {
            response.status(404).json({
                message: "Le produit à supprimer n'est pas trouvé."
            })
        } else {
            response.status(200).json({
                message: "Suppression réussie! Le produit n'existe plus dans le stock",
                data: data
            })
        }
    })
    .catch((error) => {
        response.status(500).json({
            message: error.message || "Une erreur est survenue lors de la suppression du produit."
        })
    })
    console.log(request.params)
})


router.put('/:_id', async(request, response) => {
    console.log("Update one product")
    const { _id } = request.params
    const { title, description, price } = request.body
    const product = new modelProduct({ title: title, description: description, price: price })
    await modelProduct.findByIdAndUpdate( _id, request.body, { useFindAndModify: false })
    .then((data) => {
        if(!data) {
            response.status(404).json({
                message: `Mise à jour échoué pour id=${_id}. Peut que cet article n'est pas trouvé.`
            })
        } else {
            response.status(200).json({
                message:"Mise à jour effectuée.",
                data: data
            })
        }
    })
    .catch((error) => {
        response.status(500).json({
            message: error.message || `Erreur lors du mise à jour pour id = ${_id}`
        })
    })
    console.log(request.params)
})


module.exports = router