const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const dotenv = require('dotenv').config()
const userRoutes = require("./routes/user")

const cors = require("cors")
app.use(cors());


//Visualizacion del contenido del endpoint o envio del contenido
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static("uploads"));
app.use('/uploads', express.static('uploads'));

//app.use(`/${API_PATH}/addresses`, addressRoutes);
app.use(`/${process.env.API_PATH}/users`,userRoutes);

module.exports = app
