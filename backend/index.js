const express = require('express')
const path = require('path')
const app = express()
const port = 4000
// import bcrypt from "bcrypt"
// const saltRounds =10;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

const users = [];
app.use(express.static('public'))
app.use(express.json()); //요청body를 express가 처리
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname, "notice.html"))
})

app.post('/signup', (req, res) => {
  const {user_gubun, user_id, user_password, user_name, user_call, user_sms, user_email, user_files} = req.body; //post 로 전달된 요청정보는 요청 body에 담겨서 서버로 전달되므로, 필요한 정보만 구조분해할당으로 분해
  bcrypt.hash(user_password, saltRounds, function(err, hash) {
    //Store hash in your password DB.
    users.push({
      role: user_gubun,
      id: user_id,
      name: user_name,
      phone: user_call,
      email: user_email,
      sms: user_sms ? "동의": "미동의",
      file: user_files,
      password: hash
    });
});

  console.log(users);
  console.log("아이디 : ", user_id); // request의 약어, 요청 정보가 저장된 객체(=덩어리)
  console.log("이름 : ", user_name); 
  console.log("비밀번호 : ", user_password); 
  console.log("연락처 : ", user_password); 
  console.log("이메일 : ", user_email);
  console.log("SMS수신 : ", user_sms); 
  console.log("첨부파일 : ", user_files); 
  res.send("회원가입 성공!"); 
})

app.post('/signin', (req, res) => {
 res.send("/sigin 페이지를 보고 계십니다."); // 서버 점검을 알리는 웹문서를 클라이언트에 전송하는 명령
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})