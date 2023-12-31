
const connectToMongo = require('./db');
const express = require('express');
const app = express();
const cors = require('cors')

connectToMongo();
const port = 5000;

app.use(cors())
app.use(express.json())

//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.get('/', (req, res) => {
  res.send('Hello')
})


app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})
