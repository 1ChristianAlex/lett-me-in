import mongoose from "mongoose";
import { readJson } from "../classes/readJson";
import { schemaDB } from "./schema";
import { mongoOption } from "./mongoOpt";
import { User, movieInterface } from "../classes/interfaces";

export class mongoDb {
    private mongoD = mongoose;
    
    private openCon(call:Function){
        this.mongoD.connect(`mongodb://${mongoOption.mongoString.ip}/${mongoOption.mongoString.db}`,{
        ...mongoOption.mongoCon
    }).then((res)  =>{
        console.log('Connect');       
        call();
    })
}



private closeCon(){
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
            this.openCon(()=>{
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
            })
        }
        
        
    });
}
public findUser(userParm:User){
    return new Promise((res,rej)=>{
        this.openCon(()=>{
            let user = this.mongoD.model('User', schemaDB.User);
            user.find(userParm).then((doc:User[])=>{
                res(doc)
            }).catch(err=>{
                rej(err)
            });
        });
    });
}
public findRandomMovie(){
    return new Promise((res,rej)=>{
        this.openCon(()=>{
            let movie = this.mongoD.model('movie',schemaDB.movieSchema);
            movie.findOne().then((movieResult:any)=>{ 
                res(movieResult);
                this.closeCon();
            }).catch(err=>{
                rej(err);
            });
        });
    });
}

public actorRank(){
    return new Promise((res,rej)=>{
        this.openCon(()=>{
            let actor = this.mongoD.model('actor',schemaDB.actors);
            actor.findOne().$where(()=>{
                'return this.rating > 1500'
            }).limit(10).then((actorResult:any)=>{ 
                res(actorResult);
                this.closeCon();
            }).catch(err=>{
                rej(err);
            });
        });
    });
}

}



export class mongoReadFiles{
    private readF = new readJson();
    private mongoD = mongoose;
    
    private openCon(call:Function){
        this.mongoD.connect(`mongodb://${mongoOption.mongoString.ip}/${mongoOption.mongoString.db}`,{
        ...mongoOption.mongoCon
    }).then((res)=>{
        console.log('Connect');
        call()
    }).catch((err:any) =>{
        console.log('not good', err)
    })
    
}
private closeCon(){
    this.mongoD.disconnect().then(dis=>{
        console.log('Disconnect')
    })
}
public insertMongoMovies(){
    this.openCon(()=>{
        let user = this.mongoD.model('movie',schemaDB.movieSchema)
        this.readF.readMovieHard().forEach(item=>{
            user.create(item).then(res=>{
                console.log(res);
                console.log(item)
                this.closeCon();
            }).catch(err=>{
                console.log(err)
            })
        })
        
    })
}
public insertMongoActors(){
    
    this.openCon(()=>{
        let user = this.mongoD.model('actor',schemaDB.actors)
        this.readF.readActors().forEach(item=>{
            user.create(item).then(res=>{
                console.log(res);
                this.closeCon();
            }).catch(err=>{
                console.log(err)
            })
        })
        
    })
}
}