const configToUse = require('./config/keys')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const product = require('./src/Product/product.router')
const user = require('./src/User/user.router')
const adresse = require('./src/Adresse/adresse.router')
const commande = require('./src/Commande/commande.router')
const PORT = process.env.port || 4000


mongoose.connect(
    configToUse.dbURL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex : true,
    },
    (error) => {
      if (!error) {
        console.log(`La connection à la base des données a reussie`);
      } else {
        console.log(`La connection à la base des données a échouée: ${error}`);
      }
    }
  );


//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/product', product)
app.use('/user', user)
app.use('/adresse', adresse)
app.use('/commande', commande)


//Routes
app.get('/', (request, response) => {
    response.send('Welcome')
})

app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`)
})
