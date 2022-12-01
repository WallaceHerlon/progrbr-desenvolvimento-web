let args = process.argv.slice(2);

let a = Number(args[0]);
let b =  Number(args[1]);
let c = soma(a, b);

function soma(x, y) {
    return x + y;
}

console.log(c);

//Para executar esse script no Node abra Cmder
//Dígite o caminho que se encontra esse arquivo com comando cd no começo
//exemplo: cd C:\Users\Documents\Cursos\NodeJS
//após está dentro do arquivo, dígite node e o nome do arquivo mais o argumento para realizar a operação
//exemplo node script.js 50 150