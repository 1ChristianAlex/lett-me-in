import { Component, OnInit } from '@angular/core';
import { RestCService } from "../../../providers/rest-c.service";

@Component({
  selector: 'app-last-step',
  templateUrl: './last-step.component.html'
})
export class LastStepComponent implements OnInit {

  constructor(private restC:RestCService) { }

  ngOnInit() {
  }
  signInLett(){
    let userData = JSON.parse(sessionStorage.getItem('userCreation'))
    this.restC.postUser(userData).then(res=>{
      console.log(res)
    });
  }
}
