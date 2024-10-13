const createTurma = require("./Turma");

function createTurmaPresencial(codigo, nota, frequencia) {
  const turma = createTurma(codigo, nota);
  let _frequencia = frequencia;

  return {
    ...turma,
    get frequencia() {
      return _frequencia;
    },
    set frequencia(value) {
      _frequencia = value;
    },
    aprovado() {
      return turma.aprovado() && _frequencia >= 75;
    },
  };
};

module.exports = createTurmaPresencial;