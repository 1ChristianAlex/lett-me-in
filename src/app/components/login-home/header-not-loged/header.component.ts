import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-unloged',
  templateUrl: './header.component.html'
})
export class HeaderNotComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  baseLocation:string = window.location.origin;
}
