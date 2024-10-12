const Aluno = require('./Aluno');
const Turma = require('./Turma');
const TurmaPresencial = require('./TurmaPresencial');

const turma1 = new Turma('MAT101', 7);
const aluno1 = new Aluno('João', 'joao123', '123456', turma1);
const turmaPresencial1 = new TurmaPresencial('MAT102', 8, 80);

console.log(`Turma1: Código = ${turma1.codigo}, Nota = ${turma1.nota}`);
console.log(`Aluno1: Nome = ${aluno1.nome}, Login = ${aluno1.login}, RA = ${aluno1.ra}, Turma Código = ${aluno1.turma.codigo}`);
console.log(`TurmaPresencial1: Código = ${turmaPresencial1.codigo}, Nota = ${turmaPresencial1.nota}, Frequência = ${turmaPresencial1.frequencia}`);
console.log(`Turma1 aprovado: ${turma1.aprovado()}`);
console.log(`TurmaPresencial1 aprovado: ${turmaPresencial1.aprovado()}`);