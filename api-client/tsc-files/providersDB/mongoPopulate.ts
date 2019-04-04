import mongoose from "mongoose";
import { readJson } from "../classes/readJson";
import { schemaDB } from "./schema";
import { mongoOption } from "./mongoOpt";

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
                
            }).catch(err=>{
                console.log(err)
            })
        })
        
    })
}
public insertMongoCategories(){
    this.openCon(()=>{
        let user = this.mongoD.model('categorie',schemaDB.categorie)
        this.readF.readCategories().forEach(item=>{
            user.create({categorie:item}).then(res=>{
                console.log(res);
                
            }).catch(err=>{
                console.log(err)
            })
        })
        
    })
}
public insertMongoFeedMovie(){
    this.openCon(()=>{
        let feedMovie = this.mongoD.model('feed',schemaDB.feedMovie);
        this.readF.feedMovie().forEach(item=>{
            
            feedMovie.create(item).then(response =>{
                console.log(response);
            }).catch(err=>console.log(err))
        })
    })
}
}
