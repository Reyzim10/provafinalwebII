const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Solicitacao = sequelize.define('Solicitacao', {
  alunoId: { type: DataTypes.INTEGER, allowNull: false },
  disciplinaId: { type: DataTypes.INTEGER, allowNull: false },
  justificativa: { type: DataTypes.TEXT, allowNull: false },
  status: { type: DataTypes.ENUM('pendente', 'aprovado', 'rejeitado'), defaultValue: 'pendente' },
});

module.exports = Solicitacao;