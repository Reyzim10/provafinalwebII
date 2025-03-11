const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Disciplina = sequelize.define('Disciplina', {
  nome: { type: DataTypes.STRING, allowNull: false },
  codigo: { type: DataTypes.STRING, unique: true, allowNull: false },
  cargaHoraria: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = Disciplina;