const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const sequelize = require('./config/db');
const alunoRoutes = require('./routes/alunoRoutes');
const disciplinaRoutes = require('./routes/disciplinaRoutes');
const solicitacaoRoutes = require('./routes/solicitacaoRoutes');

const app = express();

// Configurações
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Template Engine
app.engine('hbs', exphbs.engine({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Rotas
app.use('/aluno', alunoRoutes);
app.use('/disciplina', disciplinaRoutes);
app.use('/solicitacao', solicitacaoRoutes);
app.get('/', (req, res) => res.render('dashboard'));

// Sincroniza o banco de dados
sequelize.sync().then(() => {
  console.log('Banco de dados conectado');
}).catch(err => console.error('Erro ao conectar ao banco:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));