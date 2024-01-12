const nodemailer = require('nodemailer')

require('dotenv').config({ path: './config/.env' })

let transport = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: process.env.MAILTRAP_PORT,
    auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS
    }
});
const contact = (req, res) => {
    console.log(req.body)

    transport.sendMail({
        from: "Personal Portfolio Website", // Adresse d'envoi
        to: "sylvaincadoret@hotmail.com", // Receveur
        subject: "Nouvelle prise de contact", // Objet de l'email 
        html: `
           
            <h3>Nom : ${req.body.name}</h3>
            <p>Email : ${req.body.email}</p>
            <p>Message : ${req.body.message}</p>
        `,
        text: "Coucou Sylvain"
    })

    res.json('coucou')
}

module.exports = {
    contact
}