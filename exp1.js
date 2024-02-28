var express=require('express');
var bodyParser=require('body-parser');
var users=require('./data');
const data = require('./data');
var app=express();
var cors=require('cors')
var jsonBodyParser=bodyParser.json();
app.use(jsonBodyParser);
app.use(cors())
app.get('/Find',function(req,res){
    res.json(data)
});

app.get('/Find/:Job',function(req ,res){
    const Job=req.params["Job"];
    res.json(users.filter((el)=>el.Job==Job));
});

app.post('/Find',function(req ,res){
    var user=req.body;
    users.push(user);
    res.json(user);
});
app.put('/Find/:Job',function(req ,res){
    var Job=req.params.Job;
    var chUser=null;
    var {Job,Position,Company,Location,Salary}=req.body;
    for(let i=0;i<users.length;i++){
        if(Job)
           users[i].Job=Job;
        if(Position)
           users[i].Position=Position;
        if(Company)
           users[i].Company=Company;
        if(Location)
           users[i].Location=Location;
        if(Salary)
           users[i].Salary=Salary;
    chUser=users[i];
    break;
    }
});
app.delete('/Find/:Job',function(req ,res){
    const Job=req.params["Job"];
    res.json(users.filter((el)=>el.Job!=Job))
});
var server=app.listen(8084,function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log("Welcome!!");
})