const mongoose = require('mongoose')
const Schema = mongoose.Schema


const CommandeSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now, },
    montant: { type: Number, required: true, },
    user: [
        {type: Schema.Types.ObjectId, ref: 'User'}
    ],
})

module.exports = mongoose.model("Commande", CommandeSchema)