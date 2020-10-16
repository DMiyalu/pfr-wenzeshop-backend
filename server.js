const configToUse = require('./config/keys')
const express = require('express')
const app = express()
const blogAdmin = express()
const cors = require('cors')
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const product = require('./src/routes/product')
const user = require('./src/routes/user')
const PORT = process.env.port || 8080
const jwt = require("jsonwebtoken")


var corsOptions = {
    origin: '192.0.0.1:19006',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


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
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.get('/', (request, response) => {
    response.send('Welcome')
})


app.use('/product', product)
app.use('/user', user)


app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`)
})
