const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

let users = [
    {
        id: 0,
        name: "Wallace Herlon",
        phone: "(12)99999-9999"
    },
    {
        id: 1,
        name: "José Fernando",
        phone: "(12)99999-9999"
    },
    {
        id: 2,
        name: "Pedro Lará",
        phone: "(12)99999-9999"
    },
]

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.get("/", (req, res) => {

    res.render('user', { users });
})

app.listen(3000, () => {
    console.log('Server Running on 30000');
})