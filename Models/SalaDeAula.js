const mongoose = require('mongoose');


const salaDeAulaSchema = new mongoose.Schema({
  descricao: {
    type: String,
    required: true, 
  },
  localizacao: {
    type: String,
    required: true, 
  },
  capacidade: {
    type: Number,
    required: true, 
  },
  removido: {
    type: Boolean,
    default: false, 
  },
});


const SalaDeAula = mongoose.model('SalaDeAula', salaDeAulaSchema);


module.exports = SalaDeAula;
