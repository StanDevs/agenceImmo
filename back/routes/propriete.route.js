var express = require('express');
var ProprieteModel = require('../models/propriete.model.js'); //le schema  "export",propriete.model
var router = express.Router();
const Propriete = ProprieteModel.Propriete;  //recuperer l'utilitaire d'interraction de la bd

/* GET users listing. */
router.get('/', function(req, res, next) {  
  //interraction avec la bd comme : Propriete.find
  Propriete.find().then(propriete => {
    console.log(propriete);
    res.send(propriete);
  }).catch(err => {
    //erreur
  }); 
});

/* POST users listing. */
router.post('/', function(req, res, next) {  
  //interraction avec la bd comme : Propriete.save
    const propriete = new Propriete(req.body); 
    propriete.save().then(ProprieteSaved => {
      console.log(ProprieteSaved);
      res.send(ProprieteSaved);
    }).catch(err => {
   //erreur
  }); 
});


module.exports = router; //Dernier truc a faire



