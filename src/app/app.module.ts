import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNotComponent } from './components/login-home/header-not-loged/header.component';
import { HomeNotLogedComponent } from './components/login-home/home-not-loged/home-not-loged.component';
import { LoginHomeComponent } from './components/login-home/login-home.component';
import { MiddleHomeComponent } from './components/login-home/middle-home/middle-home.component';
import { SearchHomeComponent } from './components/login-home/search-home/search-home.component';
import { FooterHomeComponent } from './components/login-home/footer-home/footer-home.component';
import { TheBestMovieComponent } from './components/login-home/the-best-movie/the-best-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNotComponent,
    HomeNotLogedComponent,
    LoginHomeComponent,
    MiddleHomeComponent,
    SearchHomeComponent,
    FooterHomeComponent,
    TheBestMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
