const mongoose = require('mongoose');

// Définition de Model
const Properties = new mongoose.Schema({
    propertyName: String,
    city: String,
    intArea : int,
    extArea : int,
    constructYear : Date,
    nbRoom : int,
    garage : Boolean,
    description: String,
    price : double ,
    energyLabel : int,
    gasIndex: int,
});
const Model = mongoose.model('Model', modelSchema);


// Récupère tous les models
Model.find().then(models => {
    console.log(models);
  }).catch(err => {
    // Erreur avec mongo
  });

  
/*

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
