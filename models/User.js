const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true, // trim은 스페이스처리를 없애준다!
    unique : 1 // 하나밖에 못쓰게!
  },
  password: {
    type: String,
    minlength: 5
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  role:{ //관리자와 일반 유저를 구분
    type: Number,
    default: 0
  },
  image: String, //이렇게 써줄수도 있다.
  token: {  // 토큰을 이용해서 나중에 유효성검사를 할 수 있음
    type: String
  },
  tokenExp:{  // 토큰을 사용할 수 있는 기간!
    type: Number,
  }

})

const User = mongoose.model('User',userSchema)
//스키마는 모델로 감싸줘야한다! model('이 모델의 이름',스키마이름) 이런식으로 해줌!

//이 모델을 다른 파일에서도 사용할 수 있도록
module.export = { User }
