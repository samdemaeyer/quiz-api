var express = require('express');
var router = express.Router();
const models = require('../models');

const Category = models.Category;

/* GET categories listing. */
router.get('/', async function(req, res) {
  const cat = await Category.findAll(req.query);
  res.send(cat);
});

/* GET category. */
router.get('/:id', async function({ params, query }, res) {
  const cat = await Category.findOne({ id: params, ...query });
  res.send(cat);
});

module.exports = router;
