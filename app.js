const express = require('express')
const app = express()
const port = 8080

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
app.use(express.static('views'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/eyeTracker.html')
})
