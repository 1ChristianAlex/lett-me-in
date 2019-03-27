import express from "express";
import { mongoDb } from "../providersDB/mongoCon";


const app = express()
const port:number = 3000;
const hostname:string = 'localhost';
const db = new mongoDb;

app.use(express.json());
app.use(function(req:express.Request, res:express.Response, next:express.NextFunction) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Content-Type','Aplication/json');
    next();
});

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
app.route('/teste').post((req,res,next)=>{
    console.log('post')
    res.json({msg:"sucess", ...req.body});
    next()
})