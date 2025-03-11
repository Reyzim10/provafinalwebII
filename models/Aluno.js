const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Aluno = sequelize.define('Aluno', {
  nome: { type: DataTypes.STRING, allowNull: false },
  matricula: { type: DataTypes.STRING, unique: true, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  telefone: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Aluno;