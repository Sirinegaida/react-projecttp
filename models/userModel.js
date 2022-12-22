const mongoose=require("mongoose");

//for create table into db
const userSchema = new mongoose.Schema({

    name: { type: String, required: true },
    userId: {type: String, required: true},
    password: {type: String, required: true},
    verified: {type: Boolean}

}, {
//date d'ajout 
    timestamps: true
});

module.exports=mongoose.model("user",userSchema)