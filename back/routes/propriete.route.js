var express = require('express');
var ProprieteModel = require('../models/propriete.model.js');
var router = express.Router();
const Propriete = ProprieteModel.propriete;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
