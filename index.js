const http = require('http');
const express = require("express");
const app = express();
const hostname = 'localhost';
const port = 4000;
const fs = require('fs');
const bodyParser = require("body-parser");
const res = require('express/lib/response');
const mysql=require('mysql2');
var con = mysql.createConnection({
    host: "localhost",
    user: "ubendrum",
    password: "fusion",
    database:'kspd',
    port: 3306
  });
  
  
//app.use(express.static('images')); 
app.use('/images', express.static('images'));
//app.use(express.static(path.join(__dirname, 'images')));


  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
  });

  app.get("/home",function(req,res){
    res.sendFile(__dirname + "/home.html");
 });
 app.get("/test",function(req,res){
    res.sendFile(__dirname + "/test.html");
 });
 app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log(server.address());
   // ssh1();
  });
  app.get("/index",function(req,res){
    res.sendFile(__dirname + "/index.html");
 });
 app.get("/login",function(req,res){
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });
      con.query("select * from ksp_users", function (err, result) {
        if (err) throw err;
        console.log(result);
      });
    res.sendFile(__dirname + "/login.html");
 });
 app.post("/home",function(req,res){
    res.sendFile(__dirname + "/home.html");
 });

 app.post("/addemp",function(req,res){
    res.sendFile(__dirname + "/addemp.html");
 });
 app.post("/updateemp",function(req,res){
    res.sendFile(__dirname + "/updateemp.html");
 });
 app.post("/delemp",function(req,res){
    res.sendFile(__dirname + "/delemp.html");
 });