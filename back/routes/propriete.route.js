const { ObjectId } = require("bson");
var express = require("express");
var ProprieteModel = require("../models/propriete.model.js"); //le schema  "export",propriete.model
var router = express.Router();
const Propriete = ProprieteModel.Propriete; //recuperer l'utilitaire d'interraction de la bd

/* GET users listing. */
router.get("/", function (req, res, next) {
  //interraction avec la bd comme : Propriete.find
  Propriete.find()
    .then((propriete) => {
      console.log(propriete);
      res.send(propriete);
    })
    .catch((err) => {
      //erreur
    });
});

router.get("/:id", function (req, res, next) {
  //interraction avec la bd comme : Propriete.find
  const id = req.params.id;
  console.log(id);

  Propriete.findOne({ _id: req.params.id })
    .then((propriete) => {
      console.log(propriete);
      res.send(propriete);
    })
    .catch((err) => {
      console.log(err);
    });
});

/* POST users listing. */
router.post("/", function (req, res, next) {
  //interraction avec la bd comme : Propriete.save
  const newPropriete = new Propriete(req.body);
  console.log(newPropriete);
  newPropriete
    .save()
    .then((ProprieteSaved) => {
      //console.log(ProprieteSaved);
    })
    .catch((err) => {
      //erreur
      console.log(err);
    });
});

router.patch('/:id', (req, res, next) => {
  const id = req.params.id
  const prop = new Propriete(req.body);
  delete prop._id;
  console.log(prop);
  Propriete.findByIdAndUpdate(id,prop, {
    new: true
  }).then(todoSaved => {
    res.send(todoSaved)
  })
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  console.log(id);

  Propriete.findByIdAndDelete(id).then((deleted) => {
    res.send("deleted");
  });
});

module.exports = router; //Dernier truc a faire
