const express = require('express')
const app = express()

// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/contacts', require('./routes/contacts'))
app.use('/api/auth', require('./routes/auth'))

app.get('/', (req, res) => res.send('Hello World!'))

const PORT = 5000
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
