const sgMail=require ('@sendgrid/mail');
const dotenv=require("dotenv");

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail= (receiver,msg,subject) =>{
    const msgToSend= {
        to: receiver,
        from: 'craciunpavel18@stud.ase.ro',
        subject,
        text: msg,
        
    };

    sgMail
        .send(msgToSend)
        .then((res)=>{
            console.log(res);
            return 200;
        })
        .catch((error)=>{
            console.log(error);
            return 500;
        });

}

module.exports = {sendMail};