import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginHomeComponent } from "../app/components/login-home/login-home.component";
import { GettingStartedComponent } from "./components/getting-started/getting-started.component";
import { FirstStepComponent } from "./components/getting-started/first-step/first-step.component";
import { SecondStepComponent } from "./components/getting-started/second-step/second-step.component";
import { ThridStepComponent } from "./components/getting-started/thrid-step/thrid-step.component";

const routes: Routes = [
  { path: '', component: LoginHomeComponent },
  { path: 'signin', component: GettingStartedComponent, children:[
    {path:'first',component:FirstStepComponent},
    {path:'second',component:SecondStepComponent},
    {path:'thrid',component:ThridStepComponent}] }
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  