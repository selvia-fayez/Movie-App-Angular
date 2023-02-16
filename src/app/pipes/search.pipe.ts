import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movies:any[] ,searchWord:string): any[] {
    return movies.filter((movie)=> movie.title.toLowerCase().includes(searchWord.toLowerCase()))
  }

}
