var pessoa = {
    name: "Jose Pereira",
    idade: 44,
}

var contato = {
    telefone: 6786557,
    email: "JosePereira@gmail.com"
}

var copia = { ...pessoa, ...contato }

console.log(pessoa);
console.log(copia);