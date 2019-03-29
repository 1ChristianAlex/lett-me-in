import express from "express";
import { mongoDb } from "../providersDB/mongoCon";
import { User } from "../classes/interfaces";
import { Auth } from "../classes/auth";

const app = express()
const port:number = 3000;
const hostname:string = 'localhost';
const db = new mongoDb;
const auth = new Auth()

app.use(express.json());
app.use(function(req:express.Request, res:express.Response, next:express.NextFunction) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Content-Type','Aplication/json');
    next();
});

app.listen(port,hostname,()=>{
    console.log(`Server is runing http://${hostname}:${port}`);
});

app.route('/login').post((req, res, next)=>{
    let loginAcess:User = req.body;
    db.findUser(loginAcess).then(doc=>{
        res.json(doc);
        next();
    }).catch(err=>{
        console.log(err);
    });
});
app.route('/createUser').post((req, res, next)=>{
    let postUser:User = req.body;

    db.createUser(postUser).then(r=>{
        res.json(r)
        next();
    })
})
app.route('/randomMovie').get((req, res, next)=>{
    db.findRandomMovie().then(item=>{
        res.json(item);
        next();
    }).catch(err=>{
        console.log(err)
    })
})
app.route('/actorRank').get((req, res, next)=>{
    db.findRandomMovie().then(item=>{
        res.json(item);
        next();
    }).catch(err=>{
        console.log(err)
    })
})