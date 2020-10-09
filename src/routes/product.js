const express = require('express')
const router = express.Router()
const modelProduct = require('../models/product')



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
            message: error.message || "Une erreur est survenue lors de la demande"
        })
    })
})

router.post('/', async(request, response) => {
    console.log("Post a product");
    const { title, description, price } = request.body
    const product = new modelProduct({title: title, description: description, price: price})
    await product.save()
    .then(data => {
        if(data) {
            response.json({
                message: "Successfuly sent",
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

router.get('/:id', (request, response) => {
    console.log(request.params);
    response.send("One Product")
})

router.delete('/:id', (request, response) => {
    console.log(request.params);
    response.send("Delete product")
})

router.put('/:id', (request, response) => {
    console.log(request.params);
    response.send("Update product")
})


module.exports = router