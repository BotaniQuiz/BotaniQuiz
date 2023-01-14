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


async function getAll(name) {
  const perguntas = await mongoose.connection.db.collection(name).find().toArray();
  return perguntas;
}

router.get('/img', (req, res) => {
  imgModel.find({}, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send('An error occurred', err);
    }
    else {
      res.render('imagesPage', { items: items });
    }
  });
});

router.post('/img', upload.array('image', 64), (req, res, next) => {
  console.log(req.files);
  req.files.forEach(element => {   
    console.log(element); 
    const obj = {
      name: element.originalname.replace('.jpg', '').replace('.png', ''),
      img: {
        data: fs.readFileSync(path.join(process.cwd() + '/uploads/' + element.filename)),
        contentType: 'image/png'
      }
    }
    imgModel.create(obj, (err, item) => {
      if (err) {
        console.log(err);
      }
      else {
        // Atualmente o upload de imagens funciona mas não envia resposta, futuramente 
        //se necessário pode ser implementada essa melhoria.
        item.save();
        // Linhas abaixo de resposta da api causam erro e parada do upload necessário pensar numa maneira 
        // melhor de fazer isso
        // res.status(200);
        // res.json({message: 'Upload com sucesso'});
        // res.redirect('/');
      }
    });
  });
});

module.exports = router;