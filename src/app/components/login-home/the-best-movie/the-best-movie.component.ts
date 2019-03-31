import { Component, OnInit } from '@angular/core';
import { RestCService } from "../../../providers/rest-c.service";
import { movieInterface } from "../../../../../api-client/tsc-files/classes/interfaces";
@Component({
  selector: 'app-the-best-movie',
  templateUrl: './the-best-movie.component.html'
})
export class TheBestMovieComponent implements OnInit {
  
  constructor(private restC:RestCService) { }
  
  ngOnInit() {
    this.getRecentMovie();
  }
  public recentMovie:movieInterface[] = [];
  private getRecentMovie(){
    this.restC.get('recentMovie').then((movie:movieInterface[])=>{
      this.recentMovie = movie.reverse();
    }).catch(err=>{
      console.log(err)
    })
  }
}
