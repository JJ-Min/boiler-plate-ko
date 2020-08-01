const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://minZzi:1234@boilerplate.sngwe.mongodb.net/<dbname>?retryWrites=true&w=majority',{
  userNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false

}).then(()=> console.log('MongoDB Connected.....'))
  .catch(err => console.log(err))


//  위에꺼는 에러 안뜨게 할려고 하는거란댜

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
