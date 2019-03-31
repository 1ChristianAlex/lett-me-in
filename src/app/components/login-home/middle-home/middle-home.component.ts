import { Component, OnInit } from '@angular/core';
import { RestCService } from "../../../providers/rest-c.service";
import { movieInterface } from "../../../../../api-client/tsc-files/classes/interfaces";

@Component({
  selector: 'app-middle-home',
  templateUrl: './middle-home.component.html'
})
export class MiddleHomeComponent implements OnInit {

  constructor(private restC:RestCService) { }

  ngOnInit() {
    this.categories.forEach(categorie =>{
      this.getLoveListGeneric(categorie);
    })
    
  }
  imageRecomend = [1,2,3,4]
  public loveListArr:Array<Array<movieInterface>> =[]
  public getLoveListGeneric(movieCate){
    this.restC.getCategorie(movieCate,4).then((movie:Array<movieInterface>) =>{
      this.loveListArr.push(movie);
    })
  }
  private categories:Array<string> = ['Action','Drama','Science Fiction']
}
