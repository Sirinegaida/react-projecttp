const wishLists=require("../models/wishListModel");
module.exports.getWishlist=async(req,res)=>{

    try {

        const wishlists = await wishLists.find();
        res.json({
            success:true,
                wishlists

        });

    } catch(err) {
        return res.status(400).json({
            success:false,
            error:err
            

    })
    }
}
//for add
module.exports.addtowishlist= async (req, res) => {

    try {

        const wishlist= new wishLists(req.body);
        await wishlist.save();
        res.send("wishlist Created Successfully!");

    } catch(err) {
        return res.status(400).json({
            success:false,
            error:err
            

    })
    }

}

