import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 6,
      },
    },
    nav: true,
  };

  trendingMovies: any[] = [];
  trendingTv: any[] = [];
  trendingPeople: any[] = [];

  constructor(private _MovieService: MovieService) {}

  ngOnInit(): void {
    this._MovieService.getTrending('movie').subscribe({
      next: (data) => (this.trendingMovies = data.results.slice(0, 10)),
    });
    this._MovieService.getTrending('tv').subscribe({
      next: (data) => (this.trendingTv = data.results.slice(0, 10)),
    });
    this._MovieService.getTrending('person').subscribe({
      next: (data) =>
        (this.trendingPeople = data.results
          .filter((item: any) => item.profile_path != null)
          .slice(0, 10)),
    });
  }
}
