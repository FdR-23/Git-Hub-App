require('dotenv').config();
const morgan = require('morgan');
const cors = require ('cors')
const express = require('express');

//variable de entorno
const PORT = process.env.PORT
const app = express();

//cors
app.use(cors());
//metodo para entender los obj json
app.use(express.json())
//middlewares
app.use(morgan('dev'));

//metodo que sirve recibir los datos desde el cliente 
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

//Routes
const routes = require("./routes/index.js");
app.use("/", routes);

//stating the server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

