import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css'],
})
export class MoviedetailsComponent implements OnInit {
  itemDetails: any;
  similarMovies: any[] = [];
  mediaType: string = '';
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _MovieService: MovieService
  ) {}
  ngOnInit(): void {
    let { id, media_type } = this._ActivatedRoute.snapshot.params;
    this.mediaType = media_type;
    this._MovieService.getItemDetails(id, media_type).subscribe({
      next: (data) => (this.itemDetails = data),
    });
    this._MovieService.getSimilar(id, media_type).subscribe({
      next: (data) => (this.similarMovies = data.results.slice(0, 6)),
    });
  }
  getSimilar(id: string, media_type: string) {
    this._MovieService.getItemDetails(id, media_type).subscribe({
      next: (data) => (this.itemDetails = data),
    });
    this._MovieService.getSimilar(id, media_type).subscribe({
      next: (data) => (this.similarMovies = data.results.slice(0, 6)),
    });
  }
  Add(item: any) {
    this._MovieService.favouriteList.push(item);
    //alert('Added to Favourite');
  }
}
