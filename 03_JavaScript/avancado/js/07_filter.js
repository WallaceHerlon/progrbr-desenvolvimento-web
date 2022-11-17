function novoAluno(nome, idade) {
    return { nome, idade }
}

let alunos = [
    novoAluno("Maria", 23),
    novoAluno("Pedro", 45),
    novoAluno("Lais", 29),
    novoAluno("Marlen", 35),
]

function temMenosDe30(aluno){
    return aluno.idade < 30;
}

function temMaisDe30(aluno) {
    return aluno.idade > 30;
}

console.log(alunos.filter(temMaisDe30))