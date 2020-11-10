const mongoose = require('mongoose')

const MarqueSchema = new mongoose.Schema({
    title: { type: String, required: true, },
    description: { type: String, required: false, },
})

module.exports = mongoose.model("Marque", MarqueSchema)