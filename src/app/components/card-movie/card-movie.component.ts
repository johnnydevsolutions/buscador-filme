import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {
  @Input('movie') movie!: Movie;

  constructor() { }

  ngOnInit(): void {
  }

  getImage(){

    if(this.movie.Poster === 'N/A') {
     return 'http://via.placeholder.com/600';
    } else {
      return this.movie.Poster;
    }
    /* ou essa lógica
     return this.movie.Poster !== 'N/A' ? this.movie.Poster : 'https://via.placeholder.com/600' }
     */
    }
}
