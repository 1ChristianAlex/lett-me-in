import { Component, OnInit } from '@angular/core';
import { RestCService } from "../../../providers/rest-c.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html'
})
export class FirstStepComponent implements OnInit {
  
  constructor(private restC:RestCService, private router:Router) { }
  
  ngOnInit() {
    this.getUserCount();
  }
  public countUser = 0;
  public year = new Date().getFullYear()
  public qntMovieChallend:string = '';

  public takeChallend(){
    let regex = /^[0-9]*$/;
    let returnUserCreation = ():JSON =>{
      return JSON.parse(sessionStorage.getItem('userCreation').toString());
    }
    if (regex.test(this.qntMovieChallend)==true) {
      sessionStorage.setItem('userCreation',JSON.stringify({...returnUserCreation(),qtn:this.qntMovieChallend}));
      this.router.navigate(['signin/second'])
    }
    else{
      alert('Enter whith a number value');
    }
  }
  private getUserCount(){
    this.restC.get('countUser').then(count=>{
      this.countUser= count;
    })
  }
}
