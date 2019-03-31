import { Component, OnInit } from '@angular/core';
import { User,CategorieInte, movieInterface } from "../../../../../api-client/tsc-files/classes/interfaces";
import { RestCService } from "../../../providers/rest-c.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-thrid-step',
  templateUrl: './thrid-step.component.html'
})
export class ThridStepComponent implements OnInit {
  
  constructor(private restC:RestCService) { }
  
  ngOnInit() {
    this.getFavoriteCategorie();
    this.getMoreCategories();
    this.getMoviesbyCateg(this.favCategorie);
    this.gridCorrection();
    
  }
  public favCategorie:Array<string>=[];
  public moreCategorie:Array<string>=[];
  public eachMovieByCateg:Array<string>=[];
  public progressCount:number =0;

  private getFavoriteCategorie(){
    let userSess:User = JSON.parse(sessionStorage.getItem('userCreation'));
    this.favCategorie = userSess.categories;
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
    console.log(this.eachMovieByCateg)
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
    const updateUserStorage = (movies,categoriesAdd) =>{
      let atual:User = JSON.parse(sessionStorage.getItem('userCreation'));
      let newCateg = atual.categories + categoriesAdd
      sessionStorage.setItem('userCreation',JSON.stringify({movies:movies,...atual}))
    }
    if (document.querySelector(`[name="${movieValue}"]`).classList.contains('title-add')) {
      document.querySelector(`[name="${movieValue}"]`).classList.remove('title-add');  
      this.progressCount -=1;
      (document.querySelector('.progress .progress-bar') as HTMLElement).style.width = `${this.progressCount*5}%`;
    }
    else{
      document.querySelector(`[name="${movieValue}"]`).classList.add('title-add');
      this.progressCount += 1;
      (document.querySelector('.progress .progress-bar') as HTMLElement).style.width = `${this.progressCount*5}%`;
      
    }
    
  }
}
