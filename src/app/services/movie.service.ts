import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  favouriteList: any[] = [];

  constructor(private httpClient: HttpClient) {}
  getItemDetails(id: string, mediaType: string): Observable<any> {
    return this.httpClient.get(
      `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=fcba8b1bf14befeab6d05aed4c7c53b6&language=en-US`
    );
  }
  getSimilar(id: string, mediaType: string): Observable<any> {
    return this.httpClient.get(
      `https://api.themoviedb.org/3/${mediaType}/${id}/similar?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&page=1`
    );
  }
  getTrending(mediaType: string): Observable<any> {
    return this.httpClient.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=fcba8b1bf14befeab6d05aed4c7c53b6`
    );
  }
  getPaginatedMovies(page: number): Observable<any> {
    return this.httpClient.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=fcba8b1bf14befeab6d05aed4c7c53b6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
    );
  }
}
