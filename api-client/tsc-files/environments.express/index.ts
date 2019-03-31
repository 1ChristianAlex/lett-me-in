import express from "express";
import { mongoDb } from "../providersDB/mongoCon";
import { User } from "../classes/interfaces";
import { Auth } from "../classes/auth";
import { express_conf } from "./express.config";
import bodyParser = require("body-parser");

const app = express()
const port:number = express_conf.port;
const hostname:string = 'localhost';
const db = new mongoDb();
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
    db.openCon();
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
    res.json({teste:"aaa",...postUser});
    /*db.createUser(postUser).then(r=>{
        res.json(r)
        next();
    })*/
})
app.route('/randomMovie').get((req, res, next)=>{
    db.findRandomMovie().then(item=>{
        res.json(item);
        next();
    }).catch(err=>{
        console.log(err)
    })
})
app.route('/movieCatego/:categorie/:limit').get((req, res, next)=>{
    db.findMovieCategorie(req.params.categorie,parseInt(req.params.limit)).then(item=>{
        res.json(item);
        next();
    }).catch(err=>{
        console.log(err)
    })
})
app.route('/actorRank/:rating/:limit').get((req, res, next)=>{
    db.actorRank(req.params.rating,parseInt(req.params.limit)).then(item=>{
        res.json(item);
        next();
    }).catch(err=>{
        console.log(err)
    })
});
app.route('/recentMovie').get((req, res, next)=>{
    db.listRecentMovie().then(item=>{
        res.json(item);
        next();
    }).catch(err=>{
        console.log(err)
    })
});
app.route('/categories').get((req, res, next)=>{
    db.getCategorie().then(item=>{
        res.json(item);
        next();
    }).catch(err=>{
        console.log(err)
    })
});
app.route('/countUser').get((req, res, next)=>{
    db.countUsers().then(item=>{
        res.json(item);
        next();
    }).catch(err=>{
        console.log(err)
    })
});
app.get('/search/',(req,res,next)=>{
    const verifyParms =() =>{
        let myParms = {
            actor:'',
            movie:'',
            catergorie:''
        }
        for (let i = 0; i < Object.keys(req.query).length; i++) {
            switch (Object.keys(req.query)[i]) {
                case 'actor':
                myParms.actor = req.query.actor
                break;
                case 'movie':
                myParms.movie = req.query.movie
                break;
                case 'catergorie':
                myParms.catergorie = req.query.catergorie
                break;
                default:
                console.log('No parms')
                break;
            }
        }
        return myParms;
    }

    let parms = verifyParms()
    db.searchFor(parms.movie,parms.catergorie).then((searchResult)=>{
        console.log('chegando',searchResult)
        res.json(searchResult)
    }).catch(err =>{
        console.log(err)
    })
    
})