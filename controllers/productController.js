 /*importation model de classe */
 const Product= require("../models/productModel");

 //product creation
 module.exports.createProduct= async(req,res) =>{
     try {
 
         let {name,category,price,image}=req.body;
         let  newProduct = new Product({
             name:name ,
             category:category,
             price:price,
             image:image
 
         }) 
         let savedProduct= await newProduct.save();
         return res.status(200).json({
             success:true,
             product: savedProduct
         })
 
 
     } catch (err) {
         return res.status(400).json({
                 success:false,
                 error:err
                 
 
         })
     }
 }
 
 //get all products
 
 module.exports.getAllProducts= async(req,res) =>{
     try {
         
         let products= await Product.find();
         return res.status(200).json({
                 success:true,
                 products
         })
 
     } catch (error) {
        console.log(error);
     }
 }
 
 //get a product 
 module.exports.getProduct= async(req,res) =>{
    
     try {
        let {productId}=req.params;

   let  getProduct=  await Product.findById(productId);
     
     return res.status(200).json({
         success: true,
         product:getProduct
     })
 
 
 } catch (err) {
     return res.status(400).json({
             success:false,
             error: err
 
     })
 }
 }
 
 //update a product 
 module.exports.updateProduct=async(req,res) =>{
     const {productId}=req.params;
 
     try {
         let{name,category,price,image}=req.body
         const updatedProduct= await User.findByIdAndUpdate(productId,{
         $set:{
             name:name ,
             category:category,
             price:price,
             images:image
             }
 
 
         },{new:true});
         return res.status(200).json({
             success:true,
             user:updatedProduct,
             message:'product updated successfully'
         })
 
 
     } catch (error) {
         return res.status(400),json({
                 success:false,
                 err:error
 
         })
     }
 }
 
 //delete a product
 module.exports.deleteProduct=async(req,res) =>{
 
     try {
         let {productId}=req.params;
             await Product.findByIdAndDelete(productId)
             return res.status(200).json({
 
                 success: true,
                 message: "product deleted successfully."
             })
         
         }catch (error) {
             return res.status(400).json({
                     success:false
     
     
             })
         }
     
 }
 