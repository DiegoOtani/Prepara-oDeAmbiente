function createTurma(codigo, nota) {
  let _codigo = codigo;
  let _nota = nota;

  return {
    get codigo() {
      return _codigo;
    },
    set codigo(value) {
      _codigo = value;
    },
    get nota() {
      return _nota;
    },
    set nota(value) {
      _nota = value;
    },
    aprovado() {
      return _nota >= 6;
    },
  };
};

module.exports = createTurma;