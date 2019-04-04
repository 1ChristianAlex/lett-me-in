import mongoose from "mongoose";
import { schemaDB } from "./schema";
import { mongoOption } from "./mongoOpt";
import { User, movieInterface } from "../classes/interfaces";

export class mongoDb {
    private mongoD = mongoose;
    
    public openCon(){
        this.mongoD.connect(`mongodb://${mongoOption.mongoString.ip}/${mongoOption.mongoString.db}`,{
        ...mongoOption.mongoCon
    }).then((res)  =>{
        console.log('Connect');
    })
}



public closeCon(){
    this.mongoD.disconnect().then(dis=>{
        console.log('Disconnect')
    })
}
public createUser(user:User){
    
    const verifyUser = (user:User):boolean=>{
        let canSing:boolean = false;
        if (user.userName !==' '|| user.pw !==' ') {
            canSing = true
        }
        return canSing;
    }
    
    return new Promise((res,rej)=>{
        if (verifyUser(user) == true) {
            let mUser = this.mongoD.model('user',schemaDB.User);
            
            mUser.create(user).then(u=>{
                console.log(u)
                res({
                    res:res,
                    user:user
                });
            })
            .catch(err=>{
                rej(err)
            })
            
        }
        
        
    });
}
public findUser(userParm:User){
    return new Promise((res,rej)=>{
        
        let user = this.mongoD.model('User', schemaDB.User);
        user.find(userParm).then((doc:User[])=>{
            res(doc)
        }).catch(err=>{
            rej(err)
        });
    });
    
}
public countUsers(){
    return new Promise((res,rej)=>{
        let user = this.mongoD.model('User', schemaDB.User);
        user.find().countDocuments()
        .then((count)=>{
            res(count)
        }).catch(err=>{
            rej(err)
        });
    });
    
}
public findRandomMovie(){
    let randonNumber = () =>{
        let random =  (Math.floor((Math.random() * 100) +1));
        let year = new Date().getFullYear().toString();
        let actualyear = parseInt(`${year[2]}${year[3]}`);
        if (random > actualyear) {
            return `19${random}`
        }
        else{
            return `20${random}`
        }
    }
    return new Promise((res,rej)=>{
        let ran = randonNumber();
        let movie = this.mongoD.model('movie',schemaDB.movieSchema);
        movie.find({release_year:ran}).limit(1)
        .then((movieResult:any)=>{ 
            res(movieResult);
            
        }).catch(err=>{
            rej(err);
        });
    });
}
public findMovieCategorie(categorie:string,limit:number = 20){
    return new Promise((res,rej)=>{
        let movie = this.mongoD.model('movie',schemaDB.movieSchema);
        movie.find({category_name:categorie}).$where('this.release_year >= 2010')
        .limit(limit)
        .then((movieResult:any)=>{ 
            res(movieResult);
        }).catch(err=>{
            rej(err);
        });
    });
}
public listRecentMovie(){
    return new Promise((res,rej)=>{
        
        let movie = this.mongoD.model('movie',schemaDB.movieSchema);
        movie.find().$where('this.release_year >= 2010')
        .limit(20)
        .then((movieResult:any)=>{ 
            res(movieResult);
            
        }).catch(err=>{
            rej(err);
        });
    });
}
public actorRank(rank:string = '1000',limit:number = 10){
    return new Promise((res,rej)=>{
        
        let actor = this.mongoD.model('actor',schemaDB.actors);
        actor.find({}).$where(`this.rating > ${rank}`)
        .limit(limit).sort('name')
        .then((actorResult:any)=>{ 
            res(actorResult);
            
        }).catch(err=>{
            rej(err);
        });
    });
}
public getCategorie(){
    return new Promise((res,rej)=>{
        
        let categorie = this.mongoD.model('categorie',schemaDB.categorie);
        categorie.find({}).then((cate)=>{
            res(cate)
        }).catch(err=>{
            rej(err)
        });
    });
}
public searchFor( movie:string){
    return new Promise((res,rej)=>{
        let movieLike = new RegExp(`${movie}`);   
        let movieM = this.mongoD.model('movie',schemaDB.movieSchema);
        movieM.find().or([{title:movieLike},{category_name:movieLike}]).limit(20)
        .then(arrayMovie=>{
            res(arrayMovie)
        }).catch(err=>{
            rej(err)
        })
    })
}
public getFeedPosts(movieName:string,skip:number =0){
    let movieNameR = new RegExp(`${movieName}`,'i');
    let limit:number = 10;
    return new Promise((res,rej)=>{
        let feed = this.mongoD.model('feed',schemaDB.feedMovie);
        feed.find().or([{Title:movieNameR},{Genre:movieNameR}])
        .skip(limit).limit(limit)
        .then((post)=>{
            res(post)
        }).catch(err=>{
            rej(err)
        });
    });
}
}