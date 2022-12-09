const express = require('express');
const fs = require('fs');
const app = express();

let user = {
    id: 0,
    name: "Wallace",
    phone: "(222)2345-9876"
}

app.get("/", (req, res) => {
    
    fs.readFile('./templates/user.html', 'UTF8', (err, data) => {
        if (!err) {
            data = data.replace("Nome", user.name);
            data = data.replace("Telefone", user.phone);
            
            res.send(data);
        }
    })
})

app.listen(3000, () => {
    console.log('Server Running on 30000');
})