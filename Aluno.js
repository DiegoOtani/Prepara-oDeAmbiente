function createAluno(nome, login, ra, turma) {
  return {
    nome,
    login,
    ra,
    turma,
  };
};

module.exports = createAluno;