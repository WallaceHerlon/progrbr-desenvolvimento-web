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

mongoose.connect('mongodb://localhost/newLinks', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let db = mongoose.connection;

db.on("error", () => { console.log("houve um erro") });
db.once("open", () => {
    console.log("Banco carregado");

    app.get('/:title', async (req, res) => {

        let title = req.params.title;
        try {
            let doc = await Link.findOne({ title })

            res.redirect(doc.url)

        } catch (error) {
            res.send(error)
        }
    })
})

app.get('/', (req, res) => res.send('Hello World Mundo!'));
app.listen(port, () => console.log(`Example listening on port ${port}!`));