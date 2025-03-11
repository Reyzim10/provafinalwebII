const Solicitacao = require('../models/Solicitacao');

exports.index = async (req, res) => {
  const solicitacoes = await Solicitacao.findAll({ include: ['aluno', 'disciplina'] });
  res.render('solicitacao/index', { solicitacoes });
};

exports.cadastrar = async (req, res) => {
  const alunos = await req.models.Aluno.findAll();
  const disciplinas = await req.models.Disciplina.findAll();
  res.render('solicitacao/cadastrar', { alunos, disciplinas });
};

exports.salvar = async (req, res) => {
  await Solicitacao.create(req.body);
  res.redirect('/solicitacao');
};

exports.atualizarStatus = async (req, res) => {
  const { id, status } = req.body;
  await Solicitacao.update({ status }, { where: { id } });
  res.redirect('/solicitacao');
};