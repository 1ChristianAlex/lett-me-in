import { Component, OnInit } from '@angular/core';
import { User,CategorieInte, movieInterface } from "../../../../../api-client/tsc-files/classes/interfaces";
import { RestCService } from "../../../providers/rest-c.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-thrid-step',
  templateUrl: './thrid-step.component.html'
})
export class ThridStepComponent implements OnInit {
  
  constructor(private restC:RestCService, private router:Router) { }
  
  ngOnInit() {
    this.getFavoriteCategorie();
    this.getMoreCategories();
    this.getMoviesbyCateg(this.favCategorie);
    this.gridCorrection();
    
  }
  public modalSearchBar:string ='';
  public favCategorie:Array<string>=[];
  public moreCategorie:Array<string>=[];
  public eachMovieByCateg:Array<string>=[];
  public progressCount:number =0;
  
  public listMovieUser:Array<string> =[''];
  
  private getFavoriteCategorie(){
    if (sessionStorage.getItem('userCreation')!==null) {
      let userSess:User = JSON.parse(sessionStorage.getItem('userCreation'));
      this.favCategorie = userSess.categories;
    }
    else{
      this.router.navigate(['/'])
    }
    
  }
  private getMoreCategories(){
    this.restC.get('categories').then((categorie:CategorieInte[])=>{
      let newCategorie:Array<string>;
      for (let i = 0; i < categorie.length; i++) {
        if (this.favCategorie.includes(categorie[i].categorie)==false) {
          this.moreCategorie.push(categorie[i].categorie)
        }
      }
    })
  }
  private getMoviesbyCateg(eachCateg:Array<string>){
    eachCateg.forEach((item)=>{
      this.restC.getCategorie(item,4).then(each=>{
        this.eachMovieByCateg.push(...each);
      });
    });
  }
  private gridCorrection(){
    setTimeout(()=>{
      let height:number =0;
      document.querySelectorAll('.movie-item .movie-desc').forEach((box:Element)=>{
        if (box.clientHeight >height) {
          height = box.clientHeight;
        }
      })
      document.querySelectorAll('.movie-item .movie-desc').forEach((box:any)=>{
        box.style.height = `${height + 45}px`;
      })
    },1000)
  }
  public addMovieUser(movieValue:string,categorie:Array<string>){
    if (document.querySelector(`[name="${movieValue}"]`).classList.contains('title-add')) {
      document.querySelector(`[name="${movieValue}"]`).classList.remove('title-add');  
      this.progressCount -=1;
      (document.querySelector('.progress .progress-bar') as HTMLElement).style.width = `${this.progressCount*5}%`;
      
      for (let i = 0; i < this.listMovieUser.length; i++) {
        if (this.listMovieUser[i] == movieValue) {
          delete this.listMovieUser[i];
        }
      }
      
    }
    else{
      document.querySelector(`[name="${movieValue}"]`).classList.add('title-add');
      this.progressCount += 1;
      (document.querySelector('.progress .progress-bar') as HTMLElement).style.width = `${this.progressCount*5}%`;
      
      
        if (this.listMovieUser.includes(movieValue)==false) {
          this.listMovieUser.push(movieValue)
      }
    }
    this.listMovieUser = this.listMovieUser.filter(function(el) { return el; });
  }
  public searchCategorie(searchContext:string){

    let getStringCorretion = (textTo:string)=>{
      return textTo.charAt(0).toLocaleUpperCase()+ textTo.slice(1)
    }
    this.restC.search(getStringCorretion(searchContext)).then((searchResult:any)=>{
      this.eachMovieByCateg = [];
      this.eachMovieByCateg = searchResult;
      this.gridCorrection();
    })
  }
  public finishingThrid(){
    const updateUserStorage = (movies) =>{
      let atual:User = JSON.parse(sessionStorage.getItem('userCreation'));
      sessionStorage.setItem('userCreation',JSON.stringify({...atual,movies:movies}))
    }
    updateUserStorage(this.listMovieUser)
  }
}
