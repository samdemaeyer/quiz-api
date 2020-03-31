const express = require('express')
const router = express.Router()
const models = require('../models')

const Category = models.Category

/* GET categories listing. */
router.get('/', async({ query }, res) => {
  const category = await Category.findAll(query)
  res.send(category)
})

/* GET category. */
router.get('/:id', async({ params, query }, res) => {
  const category = await Category.findOne({ id: params, ...query })
  res.send(category)
})

module.exports = router
