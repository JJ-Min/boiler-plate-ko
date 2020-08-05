const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');

const config = require('./config/key');
const { User } = require("./models/User");

//application/x-www-form-urlencoded 가져와서 분석할 수 있게 가져오기
app.use(bodyParser.urlencoded({extend: true}));
//application/json 가져와서 분석할 수 있게 가져오기
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI,{
  userNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false

}).then(()=> console.log('MongoDB Connected.....'))
  .catch(err => console.log(err));


app.get('/', (req, res) => res.send('Hello World!에헤헤ㅔ'));

app.post('/register', (req,res)=>{
  //회원가입할때 필요한 정보들은 client에서 가져오면  그것들을 데이터베이스에 넣어준다.

  /*
  * { id : 'whals' , password : 1234 } 이런 데이터들은 req.body
  * req.body 안에 이런 데이터들이 들어 있을 수 있는 이유는 bodyParser 때문이다.
  *
  * */
  const user = new User(req.body);
  user.save((err, userInfo)=>{ //save는 몽고디비에서 온 메소드! 정보들이 user모델에 저장이 된 것.
    if(err) return res.json({success: false, err});
    return res.status (200).json({ //status 200은 성공
      success: true
    })
  })
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
