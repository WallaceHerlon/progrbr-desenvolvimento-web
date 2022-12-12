const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    title: String,
    description: String,
    url: String,
    click: Number
})

const Link = mongoose.model('Link', linkSchema)

let link = new Link({
    title: "progbr",
    description: "Link para o Twitter",
    url: "https://twitter.com/progrbr",
    click: 0,
})

link.save().then(doc => {
    console.log(doc)
}).catch(err => {
    console.log(err)
})

mongoose.connect('mongodb://localhost/newLinks', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let db = mongoose.connection;

db.on("error", () => { console.log("houve um erro") });
db.once("open", () => { console.log("Banco carregado") })

app.get('/', (req, res) => res.send('Hello World Mundo!'));
app.listen(port, () => console.log(`Example listening on port ${port}!`));