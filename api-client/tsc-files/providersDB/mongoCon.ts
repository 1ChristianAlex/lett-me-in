import mongoose from "mongoose";
import { readJson } from "../classes/readJson";
import { schemaDB } from "./schema";
import { mongoOption } from "./mongoOpt";

export class mongoDb {
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
public findUser(){
    return new Promise((res,rej)=>{
        this.openCon(()=>{
            let user = this.mongoD.model('User', schemaDB.User);
            user.find().then(doc=>{
                res(doc)
                this.closeCon()
            }).catch(err=>{
                rej(err)
            })
        })
    })
}
public insertMongoMovies(){
    this.openCon(()=>{
        let user = this.mongoD.model('movie',schemaDB.movieSchema)
        this.readF.readMovieHard().forEach(item=>{
            user.create(
                item
                ).then(res=>{
                    console.log(res);
                    console.log(item)
                    
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
                user.create(
                    item
                    ).then(res=>{
                        console.log(res);
                    }).catch(err=>{
                        console.log(err)
                    })
                })
                
            })
        }
        
    }
    