import express from 'express'
const app = express()
const port =process.env.port|| 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/weather', (req, res) => {
  res.send('My weather app!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})