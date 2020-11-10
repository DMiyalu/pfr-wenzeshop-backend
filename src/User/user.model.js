const mongoose = require('mongoose')
const Schema = mongoose.Schema


const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true, lowercase: true },
    password: { type: String, required: true },
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    telephone: { type: String, required: true },
    adresse: [
        {type: Schema.Types.ObjectId, ref: 'Adresse'}
    ],
}, {
    timestamps: true,
})

module.exports = mongoose.model("User", UserSchema)