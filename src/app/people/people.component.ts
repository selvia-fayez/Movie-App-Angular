import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  constructor(private movieService: MovieService) {}
  trendingPeople: any[] = [];
  ngOnInit(): void {
    this.movieService.getTrending('person').subscribe({
      next: (data) => (this.trendingPeople = data.results),
    });
  }
}
