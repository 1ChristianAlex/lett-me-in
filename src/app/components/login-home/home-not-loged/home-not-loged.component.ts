import { Component, OnInit } from '@angular/core';
import { User } from "../../../../../api-client/tsc-files/classes/interfaces";
import { RestCService } from "../../../providers/rest-c.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home-not-loged',
  templateUrl: './home-not-loged.component.html'
})
export class HomeNotLogedComponent implements OnInit {
  
  constructor(private restC:RestCService, private router:Router) { }
  
  ngOnInit() {
  }
  public userData:User= {
    name:'',
    pw:'',
    email: ''
  };
  
  public userForm(){
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (regex.test(this.userData.email) && this.userData.name.length > 3 && this.userData.pw.length > 5) {
      sessionStorage.setItem('userCreation',JSON.stringify(this.userData));
      this.router.navigate(['/signin/first']);
      
    }
    else{
      alert("Please, complete de filed correctly");
    }
    
  }
}
