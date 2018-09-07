const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  const db = client.db('TodoApp')

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b8e394b8791624a1893f06f')
  }, {
    $inc: {
      age: 10
    }
  }, {
    returnOriginal: false
  }).then(res => console.log(res))

  client.close();
});