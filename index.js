require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const contactRoute = require('./routes/contact')



// Va me permettre d'autoriser n'importe qui d'utiliser mon API
app.use(cors({
    origin: '*'
}))

// Permet de decoder le JSON recu par le front
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Permet d'utiliser les Routes définies dans le fichier ./routes/contact
app.use(contactRoute)

// Lance le serveur nodeJs sur le port 3001
app.listen(3001, () => {
    console.log('le serveur est lancé')
})