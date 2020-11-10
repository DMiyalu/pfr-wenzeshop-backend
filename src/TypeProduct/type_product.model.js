const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const TypeProductSchema = new mongoose.Schema({
    title: { type: String, required: true, },
    description: { type: String, required: false, },
})

module.exports = mongoose.model("TypeProduct", TypeProductSchema)