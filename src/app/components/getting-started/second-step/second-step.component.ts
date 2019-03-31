import { Component, OnInit } from '@angular/core';
import { RestCService } from "../../../providers/rest-c.service";
import { Router } from "@angular/router";
import { CategorieInte } from "../../../../../api-client/tsc-files/classes/interfaces";

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html'
})
export class SecondStepComponent implements OnInit {
  
  constructor(private restC:RestCService,private router:Router) { }
  
  ngOnInit() {
    this.getCategorie();
    
  }
  public userCheckbox =[];
  private getCategorie(){
    this.restC.get('categories').then(cate=>{
      this.categories= cate;
    })
  }
  
  public categories:CategorieInte[];
  
  private takeChallend(categ){
    let returnUserCreation = ():JSON =>{
      return JSON.parse(sessionStorage.getItem('userCreation').toString());
    }
    sessionStorage.setItem('userCreation',JSON.stringify({...returnUserCreation(),categories:categ}))
  }
  
  public getUserCategoies(){
    const getValues = ():Array<boolean> =>{
      let valuesTrue:Array<boolean> = []
      document.querySelectorAll('.categories-section .categorie-item input').forEach((item:HTMLFormElement) =>{
        if (item.checked == true) {
          valuesTrue.push(item.value);
        }
      });
      return valuesTrue;
    }
    if (getValues().length >= 1) {
      this.takeChallend(getValues());
      this.router.navigate(['signin/thrid'])
    }
    else{
      alert('Select at least one categorie')
    }
  }
}
