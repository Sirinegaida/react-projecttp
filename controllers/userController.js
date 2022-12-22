 /*importation model de classe */
 const User= require("../models/userModel");

//for login
module.exports.login= async (req, res) => {
    try {

        const {userId, password} = req.body;
        const user = await User.findOne({userId, password});
        if(user) {
            res.status(200).json({
                    success:true,
                    user:user

            })
        } else {
            res.json({
                message: "Login Fail",
            });
        }

    } catch(err) {
        return res.status(400).json({
            success:false,
            error:err
            

    })
    }
}

//for register
module.exports.register = async (req, res) => {

    try {
          
        const newUser = new User({...req.body, verified: true});
        await newUser.save();
        res.status(200).json({
            success:true,
            msg:'new user added successfully '
            
        })
    } catch(err) {
        return res.status(400).json({
            success:false,
            error:err
            

    })
    }

}

module.exports.getAllUsers= async(req,res) =>{
    try {
        
        let users= await Product.find();
        return res.status(200).json({
                success:true,
                products
        })

    } catch (error) {
       console.log(error);
    }
}