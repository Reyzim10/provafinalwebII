const Disciplina = require('../models/Disciplina');

exports.index = async (req, res) => {
  const disciplinas = await Disciplina.findAll();
  res.render('disciplina/index', { disciplinas });
};

exports.cadastrar = (req, res) => {
  res.render('disciplina/cadastrar');
};

exports.salvar = async (req, res) => {
  await Disciplina.create(req.body);
  res.redirect('/disciplina');
};