const express = require('express')
const app = express()
const port = 3000

const nunjucks = require('nunjucks')
nunjucks.configure({ autoescape: true });
nunjucks.renderString('Hello {{ username }}', { username: 'James' });

app.get('/', (req, res) => {
    res.render('index.ejs', {})
  })
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))