let fs = require('fs');

fs.writeFile('teste.txt', 'Hello word', function(error){
    if(error) { throw error };

    console.log("Arquivo criado com sucesso!");
})