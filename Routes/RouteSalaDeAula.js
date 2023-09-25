import { Express } from 'express';

const express = require('express');
const router = express.Router(); 
const SalaDeAula = require('../Models/SalaDeAula'); 

router.post('/addsalasaula', async (req, res) => {
    try {
      
      const novaSala = new SalaDeAula(req.body);
      await novaSala.save();
     
      res.status(201).json(novaSala);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao cadastrar sala de aula' });
    }
  });

router.get('/getsalasaula', async (req, res) => {
    try {
      
      const salas = await SalaDeAula.find();

      res.json(salas);
    } catch (error) {
      
      res.status(500).json({ error: 'Erro ao buscar salas de aula' });
    }
  });

  router.get('/salasdeaula/:id', async (req, res) => {
    try {
      const sala = await SalaDeAula.findById(req.params.id);
  
      if (!sala) {
        return res.status(404).json({ error: 'Sala de aula não encontrada' });
      }
  
      res.json(sala);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar sala de aula por ID' });
    }
  });
  
  
  module.exports = router; 