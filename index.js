import { render } from "ejs";
import express from "express";
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';

const app = express();
const port = 3000;
const dt = new Date;
let year = dt.getFullYear();



app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("index.ejs",{
        yr : year
    })
})

app.post("/submit",(req,res)=>{
    const shortName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors],
    separator: " " ,
    length: 2
    });
    let finalName = shortName.toUpperCase()
    res.render("index.ejs",{
        name : finalName,
        yr : year
    })
})

app.listen(port,()=>{
    console.log("Server is Running");
})