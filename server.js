const express = require("express");
const bodyParser = require("body-parser"); //converitr en json
const mongoose = require("mongoose");//connexion entre mongodb et express
require("dotenv").config()   //get the content .env


const  productsRoutes =require("./routes/productsRoutes");
const  userRoutes =require("./routes/userRoutes");

const  wishlistRoutes =require("./routes/wishlistRoutes");



//Connect with MongoDB
mongoose.connect(process.env.DB_CONNECT)
//connecion to database 
mongoose.connection.on("connected",()=> {
    console.log("database connected successfully.")
})
//affiche messsage en cas d'erreur
mongoose.connection.on("error",(err)=> {
    console.log("error when connected to the database ",err)
})


const app = express();

const cors= require("cors");


//donne accés de consommation de donnés 
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//routes
app.use('/api/products/', productsRoutes);
app.use('/api/users/', userRoutes);
app.use('/api/wishlistRoutes/', wishlistRoutes);



//Listen
app.listen(process.env.APP_PORT, () => {
    console.log(`Server is running on the port: http://localhost:${process.env.APP_PORT}`);
} )