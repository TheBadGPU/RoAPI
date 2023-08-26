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

app.post('/hash/:hashtext/:admin', (req, res) => {
  let adminToHash = req.params.admin
  let textToHash = req.params.hashtext
  const yourString = `${adminToHash}`;
  console.log(yourString)
  const hash = crypto.createHash("sha512").update(yourString).digest("hex");
  console.log(hash);

  const yourString2 = `${textToHash}`;
  console.log(yourString)
  const hash2 = crypto.createHash("sha512").update(yourString2).digest("hex");
  console.log(hash2);
  res.send(hash2)
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

