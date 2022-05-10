const mysql= require('mysql');
const dotenv = require ('dotenv');
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.INSTANCE_HOST,
    port: process.env.INSTANCE_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

});


connection.connect(function (err){
    if(!err){
        console.log("Database is connected");
    }else{
        console.log("Database is not connected..." + err);
    }
});


module.exports=connection;