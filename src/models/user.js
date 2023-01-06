const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema(
    {
       firstname: {
           type: String,
           allowNull: false,
       },
       lastname: {
        type: String
       },
       email: {
        type: String,
        unique: true,
       },
       password: {
        type: String,
        select: false

       },
       
    },{
        timestamps: true

    }
)

userSchema.pre("save",async function(next){
    if (this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10)
    }
    next()
})
userSchema.methods.verifyPassword = async function(
    candidatePassword,userPassword
){
    return await bcrypt.compare(candidatePassword,userPassword)
}

const User = mongoose.model('User',userSchema)
module.exports = User