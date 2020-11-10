const mongoose = require('mongoose')

const AdresseSchema = new mongoose.Schema({
    numero: { type: String, required: true, },
    rue: { type: String, required: true, },
    quartier: { type: String, required: true, },
    commune: { type: String, required: true, },
    ville: { type: String, required: true, },
    reference: { type: String, required: false, },
})

module.exports = mongoose.model("Adresse", AdresseSchema)