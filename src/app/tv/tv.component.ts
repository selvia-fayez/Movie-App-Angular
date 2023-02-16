import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css'],
})
export class TvComponent {
  constructor(private movieService: MovieService) {}
  trendingTv: any[] = [];
  ngOnInit(): void {
    this.movieService.getTrending('tv').subscribe({
      next: (data) => (this.trendingTv = data.results),
    });
  }
}
