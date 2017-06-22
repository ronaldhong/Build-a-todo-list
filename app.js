const express = require('express');
const app = express()
const mustache = require('mustache-express');
const bodyParser = require('body-parser');
let list_todo=[];
let list_complete=[];
let obj_todo={}
app.engine('mustache', mustache() )
app.set('view engine', 'mustache');

// app.serve static files from public
app.use(express.static('public'))

// Make forms work
// Set app to use bodyParser()` middleware.
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, function(){
  console.log("cool cool");
});
app.get('/', function(req, res){
  res.render("home", {
  })
})
app.post('/', function(request, response){
  const todo=request.body.todo;
  list_todo.push(todo);
  response.render("home",{
    mark: list_complete,
    user: list_todo
  })
})
app.post('/markAsCompleted', function(req, res){
  const complete=req.body.name;
  list_complete.push(complete);
  let index=list_todo.indexof;
  list_todo.splice(index, 1)
  res.render("home",{
    mark: list_complete,
    user: list_todo
  })
})
