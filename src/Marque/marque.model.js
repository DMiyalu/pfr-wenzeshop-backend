const mongoose = require('mongoose')
const Schema = mongoose.Schema


const MarqueSchema = new mongoose.Schema({
    title: { type: String, required: true, },
    description: { type: String, required: false, },
    type_product: [
        {type: Schema.Types.ObjectId, ref: 'TypeProduct'}
    ]
})

module.exports = mongoose.model("Marque", MarqueSchema)