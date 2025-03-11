const express = require('express');
const router = express.Router();
const disciplinaController = require('../controllers/DisciplinaController');

router.get('/', disciplinaController.index);
router.get('/cadastrar', disciplinaController.cadastrar);
router.post('/salvar', disciplinaController.salvar);

module.exports = router;