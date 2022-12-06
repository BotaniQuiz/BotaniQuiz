const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/status', (req, res, next) => {
  res.status(200).json({ 'status': 'ok' });

});

router.get('/perguntas', async (req, res, next) => {
  const tipo = req.query.tipo;
  const perguntas = await getAll(tipo);
  res.status(200).json(perguntas);
});


async function getAll(name) {
  const perguntas = await mongoose.connection.db.collection(name).find().toArray();
  return perguntas;
}

module.exports = router;