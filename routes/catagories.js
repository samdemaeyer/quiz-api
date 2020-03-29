var express = require('express');
var router = express.Router();
const models = require('../models');

const Category = models.Category;

/* GET categories listing. */
router.get('/', async function(req, res) {
  const cat = await Category.findAll();
  res.send(cat);
});

module.exports = router;
