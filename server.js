const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const product = require('./src/routes/product')
const PORT = process.env.port || 8080
const { MONGOURI } = require("./config/dev");


mongoose.connect(
    MONGOURI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
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
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.get('/', (request, response) => {
    response.send('Welcome')
})


app.use('/product', product)


app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`)
})
