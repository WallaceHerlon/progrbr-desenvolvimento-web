function novoAluno(nome, idade) {
    return { nome, idade }
}

let alunos = [
    novoAluno("Maria", 23),
    novoAluno("Pedro", 45),
    novoAluno("Lais", 29),
    novoAluno("Marlen", 35),
]

function idadeDaTurma(total, aluno) {
    return total + aluno.idade
}

console.log(alunos.reduce(idadeDaTurma, 0))