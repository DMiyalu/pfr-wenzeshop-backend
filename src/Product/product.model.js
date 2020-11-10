const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true, },
    description: { type: String, required: true, },
    price: { type: Number, required: true, },
    marque: [
        {type: Schema.Types.ObjectId, ref: 'Marque'}
    ]
})

module.exports = mongoose.model("Product", ProductSchema)