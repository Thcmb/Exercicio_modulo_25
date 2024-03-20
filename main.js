function Aluno (nome, nota) {
    this.nome = nome
    this.nota = nota
}

const Sala1 = [
    new Aluno('Paola', 10),
    new Aluno('Thiago', 8),
    new Aluno('Rafaella', 6),
    new Aluno('Michelly', 5),
    new Aluno('Nathan', 6),
    new Aluno('Pedro', 4),
    new Aluno('Jorge', 9),
    new Aluno('Patrick', 5),
    new Aluno('Augusto', 4),
    new Aluno('Jessica', 7)
];

const alunosAprovados = Sala1.filter(function(aluno) {
    return aluno.nota >=6
})

console.log(alunosAprovados)
