const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const crypto = require("crypto");
const uuid = require('uuid');


app.get('/', (req, res) => {
  res.send('')
})

app.get('/get-hash/:admin', (req, res) => {
  let adminToHash = req.params.admin
  const yourString = `TEFOTA==${adminToHash}`;
  console.log(yourString)
  const hash = crypto.createHash("sha512").update(yourString).digest("hex");
  console.log(hash);

  res.send(hash)
})

app.get('/test-1/:admin', (req, res) => {
  let GetSender = req.params.admin
  console.log(GetSender)

  res.send("Test-1 Worked")
})

app.get('/history/:player/:admin', (req, res) => {
  let GetPlayer = req.params.player
  let GetSender = req.params.admin
  console.log(GetSender, GetPlayer)

  res.send("History Worked")
})

app.post('/test-2/:admin', (req, res) => {
  let GetSender = req.params.admin
  console.log(GetSender)

  res.send("Test-2 Worked")
})


app.listen(PORT, (  ) => {
  console.log(`LANL API | ONLINE | PORT: ${PORT}`)
})

