import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

// Modulos
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';


@NgModule({
  declarations: [
    AppComponent,
   CardMovieComponent,
   MoviesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
