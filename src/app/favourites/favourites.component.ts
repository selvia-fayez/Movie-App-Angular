import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent {
  favouriteList: any[] = [];
  constructor(private movieService: MovieService) {
    this.favouriteList = this.movieService.favouriteList;
  }
  Remove(item: any) {
    this.movieService.favouriteList = this.movieService.favouriteList.filter(
      (movie) => movie.id != item.id
    );
    this.favouriteList = this.movieService.favouriteList;
  }
}
