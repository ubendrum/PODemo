const http = require('http');
const express = require("express");
const app = express();
const hostname = 'localhost';
const port = 4000;
const fs = require('fs');
const bodyParser = require("body-parser");
const res = require('express/lib/response');
const sql=require('mysql');
//app.use(express.static('images')); 
app.use('/images', express.static('images'));
//app.use(express.static(path.join(__dirname, 'images')));


  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
  });

  app.get("/",function(req,res){
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
    res.sendFile(__dirname + "/login.html");
 });