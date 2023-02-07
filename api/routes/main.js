const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now())
  }
});

const upload = multer({ storage: storage });

const imgModel = require('../models/imageModel');

const router = express.Router();

router.get('/status', (req, res, next) => {
  res.status(200).json({ 'status': 'ok' });

});

router.get('/perguntas', async (req, res, next) => {
  const tipo = req.query.tipo;
  const perguntas = await getAll(tipo);
  res.status(200).json(perguntas);
});


async function getAll(collectionName) {
  const items = await mongoose.connection.db.collection(collectionName).find().toArray();
  return items;
}

module.exports = router;