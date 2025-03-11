const express = require('express');
const router = express.Router();
const solicitacaoController = require('../controllers/SolicitacaoController');

router.get('/', solicitacaoController.index);
router.get('/cadastrar', solicitacaoController.cadastrar);
router.post('/salvar', solicitacaoController.salvar);
router.post('/atualizar-status', solicitacaoController.atualizarStatus);

module.exports = router;