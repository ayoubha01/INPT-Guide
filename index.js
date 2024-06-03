import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { writeFile } from 'node:fs';

const __dirName=dirname(fileURLToPath(import.meta.url)) ;
const app=express();
const port =4000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req, res) => {
    res.sendFile(__dirName+"/public/homepage.html");
});
app.get("/interna_restau.html",(req, res) => {
    res.sendFile(__dirName+"/public/interna_restau.html");
});
app.get("/parascolaire.html",(req, res) => {
    res.sendFile(__dirName+"/public/parascolaire.html");
});
app.get("/scolarite.html",(req, res) => {
    res.sendFile(__dirName+"/public/scolarite.html");
});
app.get("/qa.html",(req, res) => {
    res.sendFile(__dirName+"/public/qa.html");
});

app.post("/done",(req, res) => {
    let stringInformations=req.body;
    console.log(stringInformations);
    writeFile('DataBase.txt',"Name : "+stringInformations.name+", Email : "+stringInformations.email+", Question : "+stringInformations.field+"//",'utf8',()=>{
        console.log('The file has been saved!');
    });
    res.sendFile(__dirName+"/public/qa.html");
    
});
app.listen(port,()=>{
    console.log("server running on port "+port);
});