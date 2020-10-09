const express = require('express')
const router = express.Router()
const modelProduct = require('../models/product')



router.get('/', (request, response) => {
    console.log("Get all product.", request.params);
    response.send("List of products")
})

router.post('/', async(request, response) => {
    console.log("Post a product");
    const product = new modelProduct({title: "sandwich", description: "a cake food", price: 3})
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