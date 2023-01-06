const User = require('../models/user')

exports.login = async(req,res)=>{
    const {email,password} = req.body

    //console.log(req.body)
    const user = await User.findOne({email})
    
    console.log(password)
    console.log(user.password)

    if (!user){
        res.status(404).json({status: "error",msg: "user does not exist"})
    }
    if (await !user.verifyPassword(password,user.password)){
        return res.status(404).json({status: "error",msg: "invalid credential"})
    }

    res.status(200).json({status: "success",user})

}
exports.register = async(req,res)=>{
    const {firstName,lastName,email,password} = req.body
    const user = await User.create({
        firstname: firstName,
        lastname: lastName,
        email,
        password
    })
    res.status(201).json({status: "success",user})
}


exports.getUsers = async(req,res)=>{
    const users = await User.find()
    res.status(200).json({status: "success",users})
}

exports.getUser = async(req,res)=>{
    const user = await User.findById(req.params.id)
    if(!user){
        res.status(400).json({status: "success",msg:`user with id ${req.params.id} does not exist`})
    }
    res.status(200).json({status: "success",user})

}
exports.updateUser = async(req,res)=>{
    const user = await User.findByIdAndUpdate(req.params.id,
        req.body,{new: true})
        if (!user){
           return res.status(400).json({status: "error",msg:"no user"})
        }   
        // book.title = req.body.title;
        // book.description = req.body.description;
        // const result = book.save()
        res.status(200).json({status: "success",user})

}
exports.deleteUser = async(req,res)=>{
    const user = await User.findByIdAndDelete(req.params.id)
    res.status(200).json({status: "success",msg:"user deleted"})

}
