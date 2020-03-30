'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Categories', [
      { name: 'JavaScript', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Movies', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Music', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Art and Literature', createdAt: new Date(), updatedAt: new Date() },
      { name: 'General Knowledge', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Geography', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Science and Nature', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sport', createdAt: new Date(), updatedAt: new Date() }
    ], {});

    const categories = await queryInterface.sequelize.query(`SELECT id from CATEGORIES;`);

    return await queryInterface.bulkInsert('questions', [
      {
        title: 'First question',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        categoryId: categories[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Second question',
        description: 'Aliquam quis iaculis est, non interdum augue.',
        categoryId: categories[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Third question',
        description: 'Nam eleifend erat a facilisis molestie.',
        categoryId:  categories[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})

  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Questions', null, {});
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
