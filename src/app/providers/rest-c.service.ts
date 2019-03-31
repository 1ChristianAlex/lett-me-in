import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from 'api-client/tsc-files/classes/interfaces';


@Injectable({
  providedIn: 'root'
})
export class RestCService {
  
  constructor(private restC:HttpClient) { }
  private getUrl():string{
    let url = new URL(window.location.href);
    let port =3000;
    return `http://${url.hostname}:${port}`;
  }
  public get(url:string):Promise<any>{
    return new Promise((res,rej)=>{
      this.restC.get(`${this.getUrl()}/${url}`).subscribe((aJson)=>{
        res(aJson)
      })
    })
  }
  public getActor(rating:string,limit:number):Promise<any>{
    return new Promise((res,rej)=>{
      this.restC.get(`${this.getUrl()}/actorRank/${rating}/${limit}`).subscribe((aJson)=>{
        res(aJson)
      })
    })
  }
  public getCategorie(categorie:string,limit:number):Promise<any>{
    return new Promise((res,rej)=>{
      this.restC.get(`${this.getUrl()}/movieCatego/${categorie}/${limit}`).subscribe((aJson)=>{
        res(aJson)
      })
    })
  }
  public postUser(user:User){
    this.restC.post(`${this.getUrl()}/createUser`,user).subscribe(item=>{
      console.log(item)
    })
  }
}
