const router= require("express").Router()

const productController= require("../controllers/productController");


router.post("/create", productController.createProduct);

router.get("/get/:productId",productController.getProduct);

router.get("/getall", productController.getAllProducts);






router.put("/update/:productId", productController.updateProduct);

//mettre dans la page de produit un axios pour la suppression comme suite 
//await axios.post('/api/products/delete/', {productId:record._id});
router.delete("/delete/:productId", productController.deleteProduct);




module.exports=router;