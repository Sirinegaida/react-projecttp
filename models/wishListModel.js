const mongoose=require("mongoose");

//for create table into db
const wishlistSchema = new mongoose.Schema({

   products:[
    {
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Product"
            }

    }
   ]
}, {
    //for date
    timestamps: true
});

module.exports=mongoose.model("wishlist",wishlistSchema)