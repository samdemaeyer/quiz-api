'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    codeBlock: DataTypes.STRING,
    codeType: DataTypes.STRING
  }, {});
  Question.associate = function(models) {
    Question.belongsTo(models.Category, {foreignKey: 'categoryId', as: 'category'})
  };
  return Question;
};
