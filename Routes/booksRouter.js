const express=require('express');
const router=express.Router();
const connection = require('../Database/db');
const mysql=require ('mysql');



//Get All Books 
router.get('/books', (req,res)=>{
    connection.query("SELECT * FROM books",(err,results)=>{
        if(err){
            console.log(err);
            return res.send(err);
        }
        return res.json({
            Books:results,
        })
    })

});
//Get Book by Id 
router.get('/book/:id', (req,res)=>{
    const {id} =req.params;
    connection.query(`SELECT * FROM books where entryId= ${mysql.escape(id)}`,(err,results)=>{
        if(err){
            console.log(err);
            return res.send(err);
        }
        return res.json({
            Book:results,
        })
    })

});

//Add a Book
router.post('/addBook', (req,res)=>{
    console.log(req.body);
    return res.send("OK!")
});
//Add Description to book
router.post('/addDescription', (req,res)=>{
    console.log(req.body);
    return res.send("OK!")
});

//Get All Books with details
router.get('/books-with-details', (req,res)=>{
    connection.query("SELECT books.title AS book, book_details.description AS description FROM books JOIN book_details ON books.entryId=book_details.bookId",
    (err,results)=>{
        if(err){
            console.log(err);
            return res.send(err);
        }
        return res.json({
            Books_With_Details:results,
        })
    })
});

//Get Book with Details by Id 
router.get('/book-with-details/:id', (req,res)=>{
    const {id} = req.params
    connection.query(`SELECT books.title AS book, book_details.description AS description FROM books JOIN book_details ON books.entryId=book_details.bookId where bookId=${mysql.escape(id)}`,
    (err,results)=>{
        if(err){
            console.log(err);
            return res.send(err);
        }
        return res.json({
            Book_With_Detail:results,
        })
    })
});





module.exports=router;