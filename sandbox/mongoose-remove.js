const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '5b98b3505d8263561f3fadc4'}).then((todo) => {
  console.log(todo)
});

Todo.findOneAndDelete('5b98b3505d8263561f3fadc4').then((todo) => {
  console.log(todo);
});