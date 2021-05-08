const express = require('express')
const mongoose = require('mongoose')
const mainRouter = require('./routes/main')
const app = express()

mongoose.connect('mongodb://localhost/spectordb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.set('view engine', 'ejs')

app.use('/main', mainRouter)

app.get('/', (req, res) => {
    res.render('index', { text: 'Hello' })
})

app.listen(3000)