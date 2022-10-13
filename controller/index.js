const router = require('express').Router();
const todos = require('../seed/todos');
const apiRoutes = require('./apiController');


router.use('/api', apiRoutes);

router.get('/', (req, res) => {
  res.render('signup');
});


router.get('/todos', (req, res) => {
  res.render('todos', {
    firstName: 'Manny',
    powerLevel : 9001,
    todos,
  });
});

router.get('/todos/:index', (req, res) => {
  res.render('todo_profile', {
    title: todos[req.params.index].todo,
    shouldShowH1: todos[req.params.index].completed,
  });
});


router.get('/users', (req, res) => {
  res.render('user_profile', {
    title: 'Emmanuel Jucaban',
    shouldShowH1: false,
  })
});



module.exports = router;

// client side rendering, the front-end still needs to make an API request
// to the back-end to get the data

// server side rendering, the back-end injects the data into template
// and responds back with the template