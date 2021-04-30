import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, observable, of, empty } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  public baseUrl = 'https://api.github.com/search/repositories';
  public searchResults: any;

  //makes HTTP call to the Api
  public searchEnteries(keyword): Observable<any>{
    if(keyword === "") {
      console.log('Not Found')
      return of(null);
    } else {
      let params = {q: keyword}
      return this.httpClient.get(this.baseUrl, {params}).pipe(
        map( response => {
          console.log(response);
          return this.searchResults = response['items'];
        })
      )
    }
  } 

  public _searchEntries(term) {
    return this.searchEnteries(term);
  }
}
