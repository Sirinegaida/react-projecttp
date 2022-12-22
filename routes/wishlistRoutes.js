const router= require("express").Router()

const wishlistController= require("../controllers/wishlistController");



router.post("/addtowishlist", wishlistController.addtowishlist);

router.get("/getwishlist", wishlistController.getWishlist);

module.exports=router;