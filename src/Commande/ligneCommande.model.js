const mongoose = require('mongoose')

const LigneCommandeSchema = new mongoose.Schema({
    quantite: { type: Number, required: true, min: 1 },
    tva: { type: Number, required: false, },
    sousTotal: { type: Number, required: true, },
    article: [
        {type: Schema.Types.ObjectId, ref: 'Product'}
    ],
    commande: [
        {type: Schema.Types.ObjectId, ref: 'Commande'}
    ]
})

module.exports = mongoose.model("LigneCommande", LigneCommandeSchema)