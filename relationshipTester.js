const models = require('./models');
const Question = models.Question;
const Category = models.Category;

Category.create({
  name: 'JavaScript'
})
.then((newCategory) => {
  console.log(newCategory.get());
})
.catch((err) => {
  console.log("Error while category creation : ", err)
})

Question.bulkCreate([
  { title: 'First question', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',  categoryId: 1 },
  { title: 'Second question', description: 'Aliquam quis iaculis est, non interdum augue.',  categoryId: 1 },
  { title: 'Third question', description: 'Nam eleifend erat a facilisis molestie.',  categoryId:  1}
])
.then((newQuestions) => {
  console.log(newQuestions)
})
.catch((err) => {
  console.log("Error while quesion creation : ", err)
})

Category.findOne({
  where: { name: 'JavaScript' }, include: 'questions'
})
.then((foundCategory) => {
  // Get the Category with Company datas included
  console.log(foundCategory)
  // Get the company record only
  // console.log(foundCategory.company)
})
.catch((err) => {
  console.log("Error while find user : ", err)
})

// 1:N
// Get the employees for a given company
Category.findByPk(1)
.then((category) => {
  // Get the Category with Users (employes) datas included
  console.log(category)
  // Get the Users (employes) records only
  // console.log(Category.get().employes)
})
.catch((err) => {
  console.log("Error while find category : ", err)
})
