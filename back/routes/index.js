const express = require('express');
var router = express.Router();




// example use

const Proprety = mongoose.model('Proprety', schema);
(energylabel, prix, propertyname, city, interior area in squaremeter, exterior area in squaremeter, construcctYears, EstateTiers, room garage, images, description )
const m = new Proprety;
m.name = 'Statue of Liberty';
m.age = 125;
m.updated = new Date;
m.binary = Buffer.alloc(0);
m.living = false;
m.mixed = { any: { thing: 'i want' } };
m.markModified('mixed');
m._someId = new mongoose.Types.ObjectId;
m.array.push(1);
m.ofString.push("strings!");
m.ofNumber.unshift(1,2,3,4);
m.ofDates.addToSet(new Date);
m.ofBuffer.pop();
m.ofMixed = [1, [], 'three', { four: 5 }];
m.nested.stuff = 'good';
m.map = new Map([['key', 'value']]);
m.save(callback);
/*
const mongoose = require('mongoose');

// Définition de Model
const modelSchema = new mongoose.Schema({
    name: String,
    isSomething: Boolean
});
const Model = mongoose.model('Model', modelSchema);

// Récupère tous les models
Model.find().then(models) => {
  console.log(models);
}).catch(err => {
  // Erreur avec mongo
});

// Récupère tous les models ayant isSomething à true
Model.find({isSomething: true}).then(models) => {
  console.log(models);
}).catch(err => {
  // Erreur avec mongo
});

// Sauvegarde un nouveau model
const model = new Model({name: 'nom', isSomething: false})
todo.save().then(modelSaved => {
  console.log(modelSaved);
}).catch(err => {
  // Erreur avec mongo
});

// Supprime tous les models avec isSomething a false
Todo.deleteMany({isSomething: false}).then(() => {
  console.log('Supprimé');
}).catch(err => {
  // Erreur avec mongo
});
*/

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

  //model.find - > retrouver les trucs

  //réponse avec code http custom
  res.status(403).send({info:'interdit'});


  //jsp
  res.render('index', { title: 'Express' });
});

module.exports = router;
