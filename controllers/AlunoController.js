const Aluno = require('../models/Aluno');

exports.index = async (req, res) => {
  const alunos = await Aluno.findAll();
  res.render('aluno/index', { alunos });
};

exports.cadastrar = (req, res) => {
  res.render('aluno/cadastrar');
};

exports.salvar = async (req, res) => {
  await Aluno.create(req.body);
  res.redirect('/aluno');
};