const express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //récupère un paramète de route (ici id)
  const id = req.params.id;
  
  //Récupère le body envoyé dans la requête
  const body =req.body;

  //Récupère la qquery passée par l'url
  //ex : example.com/ma-route/42?name=Emilien
  const name =req.query.name

  //réponse
  res.send({info: 'envoyé'});

  //réponse avec code http custom
  res.status(403).send({info:'interdit'});


  //jsp
  res.render('index', { title: 'Express' });
});

module.exports = router;
