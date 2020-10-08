const express = require('express')
const router = express.Router()


router.get('/', (request, response) => {
    console.log(request.params);
    response.send("List of products")
})

router.post('/', (request, response) => {
    console.log(request.params);
    response.send("Post product")
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