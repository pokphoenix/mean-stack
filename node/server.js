//Backend
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("./db")
const UserModel =  require("./model/user_schema")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//Allow client to access cross domain or ip-address
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers','content-type,x-access-token');
    res.setHeader('Access-Control-Allow-Credentials',true);
    next();
})

app.get("/",(req,res)=>{
    res.end("welcome to root path");
})

app.get("/home",(req,res)=>{
    res.end("welcome to home");
})

app.get("/api",(req,res)=>{
    let data = { result : true,data : [] };

    UserModel.find((err,doc)=>{
        if(err){
            data.result = false;
        }else{
            data.data = doc ;
        } 
        res.json(data);
    })
})

//dynamic API  return all body data
app.post("/api",(req,res)=>{
    const feedback = req.body;
    console.log(JSON.stringify(feedback));
    //res.end(JSON.stringify(feedback));
    UserModel.create(req.body,(err,doc)=>{
        feedback.result = "Success";
        if(err) feedback.result = "Fail";

        res.json(feedback);
    });
})

app.listen(3000,()=>{
    console.log("server is running...");
})