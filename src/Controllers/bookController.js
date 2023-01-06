const Book = require("../models/book")

const createBook = async(req,res) =>{
    const {title,description} = req.body
    const book = await Book.create({
        title,description
    })
    res.status(201).json({status: "success",book})
}

const getBooks = async(req,res)=>{
    const books = await Book.find().populate('creator')
    res.status(200).json({status: "success",books})

    
}
const getBook = async(req,res)=>{
    const book = await Book.findById(req.params.id)
    if(!book){
        res.status(400).json({status: "success",msg:`Book with id ${req.params.id} does not exist`})
    }
    res.status(200).json({status: "success",book})

}
const updateBook = async(req,res)=>{
    const book = await Book.findByIdAndUpdate(req.params.id,
        req.body,{new: true})
        if (!book){
           return res.status(400).json({status: "error",msg:"no book"})
        }   
        // book.title = req.body.title;
        // book.description = req.body.description;
        // const result = book.save()
        res.status(200).json({status: "success",book})

}
const deleteBook = async(req,res)=>{
    const book = await Book.findByIdAndDelete(req.params.id)
    res.status(200).json({status: "success",msg:"book deleted"})

}
module.exports = {createBook,getBooks,getBook,updateBook,deleteBook}