const express = require('express')
const router = express.Router()
const models = require('../models')

const Question = models.Question

/* GET questions listing. */
router.get('/', async({ query }, res) => {
  const queryParams = query.include ? { query } : { where: { ...query } }
  const question = await Question.findAll(queryParams)
  res.send(question)
})

/* GET question. */
router.get('/:id', async({ params, query }, res) => {
  const cat = await Question.findOne({ id: params, ...query })
  res.send(cat)
})

module.exports = router
