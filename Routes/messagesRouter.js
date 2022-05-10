const express=require('express');
const router=express.Router();
const connection = require('../Database/db');
const mysql= require ('mysql');

router.get('/messages', (req,res)=>{
    connection.query("SELECT * FROM library_message",(err,results)=>{
        if(err){
            console.log(err);
            return res.send(err);
        }
        return res.json({
            messages:results,
        })
    })
    
});

router.post('/addMessage', (req,res)=>{
    console.log(req.body);
    const{
        senderName,
        senderMail,
        receiverMail,
        messageContent,
    } = req.body;
    if(!senderName ||!senderMail || !receiverMail|| !messageContent){
        return res.status(400).json({
            error: "All fields are required",
        })
    }
    connection.query(`INSERT INTO library_message(senderName, senderMail, receiverMail, messageContent) Values (
        ${mysql.escape(senderName)},
        ${mysql.escape(senderMail)},
        ${mysql.escape(receiverMail)},
        ${mysql.escape(messageContent)})`,
        (err,results)=>{
        if(err){
            console.log(err);
            return res.send(err);
        }
        return res.json({
            results,
        })
    })
    



});


module.exports=router;