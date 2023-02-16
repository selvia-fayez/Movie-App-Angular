import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
   constructor(private movieService:MovieService) { }
    trendingMovies:any[]=[];
    word:string=''
    pageItem=[1,2,3,4,5,6,7,8,9,10] // must func for loop count 1 to 10
    ngOnInit(): void {
    this.getPageItems(1)
    this.movieService.getTrending('movie').subscribe({
      next:(data)=> this.trendingMovies= data.results
    
      
    }) 
  }
  getPageItems(num:number){
    this.movieService.getPaginatedMovies(num).subscribe({
    next:(data)=>this.trendingMovies = data.results 
    })
  }

}
