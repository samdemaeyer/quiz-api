'use strict'

const codeBlocks = require('../assets/codeBlocks')

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert('Categories', [
      { name: 'JavaScript', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Movies', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Music', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Art and Literature', createdAt: new Date(), updatedAt: new Date() },
      { name: 'General Knowledge', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Geography', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Science and Nature', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sport', createdAt: new Date(), updatedAt: new Date() },
    ], {})

    const categories = await queryInterface.sequelize.query('SELECT id from CATEGORIES;')

    return await queryInterface.bulkInsert('questions', [
      {
        title: 'First question',
        description: 'In the following code block, what resetObjectValues() return?',
        codeBlock: codeBlocks[0],
        codeType: 'javaScript',
        categoryId: categories[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Second question',
        description: 'Aliquam quis iaculis est, non interdum augue.',
        codeBlock: codeBlocks[1],
        codeType: 'javaScript',
        categoryId: categories[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Third question',
        description: 'Nam eleifend erat a facilisis molestie.',
        codeBlock: codeBlocks[2],
        codeType: 'javaScript',
        categoryId: categories[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Sass',
        description: 'Sentance case css.',
        codeBlock: codeBlocks[3],
        codeType: 'scss',
        categoryId: categories[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Fourth question',
        description: 'Lorem Ipsum ...',
        codeBlock: null,
        categoryId: categories[0][1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {})
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete('Questions', null, {})
    await queryInterface.bulkDelete('Categories', null, {})
  },
}
