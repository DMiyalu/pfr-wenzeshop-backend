const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true, },
    description: { type: String, required: false,},
    price: { type: Number, required: true, },
    marque: {type: String, required: false},
    categorie: {type: String, required: true},
    image: {type: String, required: true}
})

module.exports = mongoose.model("Product", ProductSchema)