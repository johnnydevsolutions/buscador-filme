import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse } from'../interfaces/apiResponse';
import { Movie } from '../interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
// url do link http://www.omdbapi.com/?apikey=[yourkey]&
  // key d3965379
private API_URL: string = 'http://www.omdbapi.com/?apikey=d3965379';

  constructor(private http: HttpClient) { }

  getMovies(searchTerm: string): Observable<Movie[]> {
    return this.http.get<ApiResponse>(`${this.API_URL}&s=${searchTerm}`).pipe(map(response => {
      return response.Search;
    }))

  }
}
