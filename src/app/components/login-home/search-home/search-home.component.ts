import { Component, OnInit } from '@angular/core';
import { RestCService } from "../../../providers/rest-c.service";
import { CategorieInte, ActorInte,movieInterface } from "../../../../../api-client/tsc-files/classes/interfaces";

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html'
})
export class SearchHomeComponent implements OnInit {

  constructor(private restC:RestCService) { }

  ngOnInit() {
    this.getActor();
    this.getCateg();
    this.getRandomMovie();
  }
  public arrayActor:Array<ActorInte> =[];
  public arrayCateg:Array<CategorieInte> =[];
  public randomMovie:movieInterface;
  
  private getActor(){
    this.restC.get('actorRank').then(actors=>{
      this.arrayActor = actors;
    })
  }
  private getCateg(){
    this.restC.get('categories').then(Categs=>{
      this.arrayCateg = Categs;
    })
  }
  private getRandomMovie(){
    this.restC.get('randomMovie').then(randomMovie=>{
      this.randomMovie = randomMovie[0];
    })
  }
}

