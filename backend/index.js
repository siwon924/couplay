const express = require('express')
const path = require('path')
const app = express()
const port = 4000
app.use(express.static('public'))

app.get('/', (req, res) => {
 // res.send('<h1>Hello World!</h1>')
 res.sendFile(path.join(__dirname, "notice.html")); // 서버 점검을 알리는 웹문서를 클라이언트에 전송하는 명령
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})