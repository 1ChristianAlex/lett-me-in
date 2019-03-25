import * as express from "express";
import { mongoDb } from "./mongoCon";
import { json } from "body-parser";

const app = express.default();
const port:number = 3000;
const hostname:string = 'localhost';
const db = new mongoDb;

app.listen(port,hostname,()=>{
    console.log(`Server is runing http://${hostname}:${port}`)
})

app.route('/login').get((req, res)=>{
    db.findUser().then(doc=>{
        res.json(doc)
    }).catch(err=>{
        console.log(err)
    })
})