const express = require('express')
const app = express()
var cors = require('cors')

const port = process.env.PORT || 3000

const sample_data = {somee: "value", title: 'Team Sauasge'}

app.use(cors())
app.get('/any_route_you_want', (req, res) => {
  console.log("I am the BE")
  res.send(JSON.stringify(sample_data.title))
})

app.get('/boo_route', (req, res) => {
  res.send('Goodbye World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})