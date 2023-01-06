const mongoose = require('mongoose')

const bookSchema = mongoose.Schema(
    {
       title: {
           type: String,
           allowNull: false,
       },
       description: {
        type: String
       },
       img: {
        type: String,
       },
       creater: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
       },
       authors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
       }],
       content: {
        type: String,
        default: ""
       },
       
       
    },{
        timestamps: true

    }
)

const Book = mongoose.model('Book', bookSchema)
module.exports = Book