import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNotComponent } from './components/login-home/header-not-loged/header.component';
import { HomeNotLogedComponent } from './components/login-home/home-not-loged/home-not-loged.component';
import { LoginHomeComponent } from './components/login-home/login-home.component';
import { MiddleHomeComponent } from './components/login-home/middle-home/middle-home.component';
import { SearchHomeComponent } from './components/login-home/search-home/search-home.component';
import { FooterHomeComponent } from './components/login-home/footer-home/footer-home.component';
import { TheBestMovieComponent } from './components/login-home/the-best-movie/the-best-movie.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { HeaderStartComponent } from './components/getting-started/header-start/header-start.component';
import { FirstStepComponent } from './components/getting-started/first-step/first-step.component';
import { SecondStepComponent } from './components/getting-started/second-step/second-step.component';
import { ThridStepComponent } from './components/getting-started/thrid-step/thrid-step.component';
import { LastStepComponent } from "./components/getting-started/last-step/last-step.component";
import { MainAppComponent } from './components/main-app/main-app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainFeedComponent } from './components/main-feed/main-feed.component';
import { LeftMainComponent } from './components/left-main/left-main.component';
import { RightMainComponent } from './components/right-main/right-main.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderNotComponent,
    HomeNotLogedComponent,
    LoginHomeComponent,
    MiddleHomeComponent,
    SearchHomeComponent,
    FooterHomeComponent,
    TheBestMovieComponent,
    GettingStartedComponent,
    HeaderStartComponent,
    FirstStepComponent,
    SecondStepComponent,
    ThridStepComponent,
    LastStepComponent,
    MainAppComponent,
    MainHeaderComponent,
    MainFeedComponent,
    LeftMainComponent,
    RightMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
