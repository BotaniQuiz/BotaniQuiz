const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const perguntaSchema = new Schema({
    pergunta: String,
    correta: String,
    incorreta1: String,
    incorreta2: String,
    incorreta3: String,
});

const Pergunta = mongoose.model('Pergunta', perguntaSchema);

module.exports = Pergunta;
