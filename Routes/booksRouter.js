const express = require('express');
const router = express.Router();
const connection = require('../Database/db');
const mysql = require('mysql');
const textToSpeech = require('@google-cloud/text-to-speech');
const {Translate} = require('@google-cloud/translate').v2;
const {sendMail} = require('../utils/mailFunctions')
const fs = require('fs');
const util = require('util');

//Get All Books 
router.get('/books', (req, res) => {
    connection.query("SELECT * FROM books", (err, results) => {
        if (err) {
            console.log(err);
            return res.send(err);
        }
        return res.json({
            Books: results,
        })
    })

});
//Get Book by Id 
router.get('/book/:id', (req, res) => {
    const { id } = req.params;
    connection.query(`SELECT * FROM books where entryId= ${mysql.escape(id)}`, (err, results) => {
        if (err) {
            console.log(err);
            return res.send(err);
        }
        return res.json({
            Book: results,
        })
    })

});

//Add a Book
router.post('/addBook', (req, res) => {
    console.log(req.body);
    return res.send("OK!")
});
//Add Description to book
router.post('/addDescription', (req, res) => {
    console.log(req.body);
    return res.send("OK!")
});

//Get All Books with details
router.get('/books-with-details', (req, res) => {
    connection.query("SELECT books.title AS book, book_details.description AS description FROM books JOIN book_details ON books.entryId=book_details.bookId",
        (err, results) => {
            if (err) {
                console.log(err);
                return res.send(err);
            }
            return res.json({
                Books_With_Details: results,
            })
        })
});

//Get Book with Details by Id 
router.get('/book-with-details/:id', (req, res) => {
    const { id } = req.params
    connection.query(`SELECT book_details.description AS description FROM book_details where bookId=${mysql.escape(id)}`,
        (err, results) => {
            if (err) {
                console.log(err);
                return res.send(err);
            }
            return res.json(results[0])
        })
});

router.get('/read-description/:id', async (req, res) => {
    const { id } = req.params;
    connection.query(`SELECT book_details.description AS description FROM book_details where bookId=${mysql.escape(id)}`,
        (err, results) => {
            if (err) {
                console.log(err);
            }
            console.log(results[0].description)
            const client = new textToSpeech.TextToSpeechClient();
            const request = {
                input: { text: results[0].description },
                voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
                audioConfig: { audioEncoding: 'MP3' },
            };

            client.synthesizeSpeech(request).then(
                (resp) => {
                    const [response ] = resp;
                    res.write(response.audioContent,'binary');
                    res.end(null, 'binary');
                })
            
        });

});

router.post('/translate/', async (req, res) => {
    const { text, language} = req.body;
    const translate = new Translate();
    let [translations] = await translate.translate(text, language);
    translations = Array.isArray(translations) ? translations : [translations];
    return res.json({translated: translations[0]})
});
router.post('/send-mail/', async (req, res) => {
    const { receiver, message } = req.body;
    let resp = sendMail(receiver, message, 'Check out this book');
    if(resp === 200) {
        return res.json({message: 'mail sent'})
    }
    return res.json({message: 'error'})
});


module.exports = router;