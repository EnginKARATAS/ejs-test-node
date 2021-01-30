const express = require('express')
var app = express();
const port = 3000
app.listen(port,() => console.log("listening : "+ port))

//NUNJUCKS

const nunjucks = require('nunjucks')

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/api/:isim',(req,res) => {
  res.render('hello.html',{
    name: req.params.isim,
    number:"343"
  })
})
 


















// app.get('/hello/:name', function(req, res) {
//     res.render('hello.html',{
//       name: req.params.name
//     });
// });

// app.get('/',function(req,res){
//   res.render('hello.html',{
    
//     sorular:[{ title: "foo", id: 1 }, { title: "bar", id: 2}] 
  
//   })
// })











{/* <h1>Posts</h1>
<ul>
{% for item in sorular %}
  <li>{{ item.title }}</li>
{% else %}
  <li>This would display if the 'item' collection were empty</li>
{% endfor %}
</ul> */}