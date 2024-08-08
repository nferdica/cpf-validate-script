const express = require('express');
const validateCPF = require('../utils/cpfValidator');

const router = express.Router();

router.post('/validate', (req, res) => {
    const { cpf } = req.body;

    if (!cpf) {
        return res.status(400).json({ error: 'CPF is required' });
    }

    const isValid = validateCPF(cpf);
    res.json({ cpf, isValid });
});

module.exports = router;
