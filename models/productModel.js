const mongoose=require("mongoose");

//for create table into db
const productSchema = new mongoose.Schema({

    name: {
         type: String,
          required: true 
        },
    category:{
        type: String,
        required: true 
    },
    price:{
         type: Number, 
         required: true
         },
    image:{ 
        type: String,
         required: true }

}, {
    //récupère date de addition
    timestamps: true
});

module.exports=mongoose.model("product",productSchema)