const express=require("express");
const { getAllBooks, getOneBook, createBook, updateBook, deleteBook } = require("../controllers/books_function");
const Book=require("../models/model")
const router=express.Router();
router.get("/",getAllBooks);
router.get("/:id",getOneBook);
router.post("/",createBook);
router.put("/:id",updateBook);
router.delete("/:id",deleteBook);
module.exports=router