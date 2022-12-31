const Book=require("../models/model")
const getAllBooks=async(req,res)=>{
    let book;
    try {
        book= await Book.find();
    } catch (err) {
        console.log(err)
    }
    if(!book){
        return res.status(404).send({message:"books not found"})
    }
    res.json({book})
}
const getOneBook=async(req,res)=>{
    let book; 
    try {
        book=await Book.findById(req.params.id)
    } catch (err) {
        console.log(err)
    }
    if(!book){
        return res.status(404).send({message:"book not found"})
    }
    res.status(200).json({book})
}
const createBook=async (req,res)=>{
    let book; 
    try {
        book=await new Book({
            name: req.body.name,
            desc: req.body.desc,
            author: req.body.author,
            image: req.body.image,
            price:req.body.price
        })
    } catch (err) {
        console.log(err)
    }
    book.save();
    if(!book){
        return res.status(404).send({message:"not able to save a book"})
    }
    res.status(200).json({book})
}
const updateBook=async (req,res)=>{
    let book; 
    try {
        book=await Book.findByIdAndUpdate(req.params.id,{
            name: req.body.name,
            desc: req.body.desc,
            author: req.body.author,
            image: req.body.image,
            price:req.body.price
        })
    } catch (err) {
        console.log(err)
    }
    book.save();
    if(!book){
        return res.status(404).send({message:"not able to save a book"})
    }
    res.status(200).json({book})
}
const deleteBook=async (req,res)=>{
    let book;
    try {
        book=await Book.findByIdAndRemove(req.params.id)
    } catch (err) {
        console.log(err);
    }
    if(!book){
        return res.status(404).send({message:"not able to delete a book"})
    }
    res.status(200).json({message:"book successfully deleted"})
}
exports.getAllBooks=getAllBooks;
exports.getOneBook=getOneBook;
exports.createBook=createBook;
exports.updateBook=updateBook;
exports.deleteBook=deleteBook;