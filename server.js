const express = require('express')
const mainRouter = require('./routes/main')
const app = express()

app.set('view engine', 'ejs')

app.use('/main', mainRouter)

app.get('/', (req, res) => {
    res.render('index', { text: 'Hello' })
})

app.listen(3000)