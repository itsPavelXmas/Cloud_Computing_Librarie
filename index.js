const express = require('express');
const cors = require ('cors');
const messagesRouter=require('./Routes/messagesRouter')
const booksRouter=require("./Routes/booksRouter");
const bodyParser=require("body-parser");
const utilsRouter=require("./Routes/utilsRouter");
const {detectLanguage, translateText} = require("./utils/translateFunctions.js");
const {LANGUAGE_ISO_CODE} = require("./utils/dictionaries.js");
const app= express();
app.use(cors());


//for parsing application/json What we send from frontend
app.use(bodyParser.json());

//for parsing application/xwww-
app.use(bodyParser.urlencoded({extended: true}));



//Using The Routes
app.use("/",messagesRouter);
app.use("/",booksRouter);
app.use("/",utilsRouter);




const port=process.env.PORT || 8080;









app.listen(port, () => {
console.log(`Cloud Library app listening on port ${port}!`)

});