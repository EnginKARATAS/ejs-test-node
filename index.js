const express = require('express')
var app = express();
const port = 3000
app.listen(port,() => console.log("listening : "+ port))
const nunjucks = require('nunjucks')

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/hello/:name', function(req, res) {
    res.render('hello.html',{
      name: req.params.name
    });
});

app.get('/',function(req,res){
  res.render('hello.html',{
    
    
    sorular:[{ title: "foo", id: 1 }, { title: "bar", id: 2}] 

  
  })
})