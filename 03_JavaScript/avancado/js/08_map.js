function novoAluno(nome, idade) {
    return { nome, idade }
}

let alunos = [
    novoAluno("Maria", 23),
    novoAluno("Pedro", 45),
    novoAluno("Lais", 29),
    novoAluno("Marlen", 35),
]

function nomeIdade(aluno) {
    return aluno.nome + " tem " + aluno.idade + " anos"; 
}

console.log(alunos.map(nomeIdade));