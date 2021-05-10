import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, observable, of, empty } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public searchResults: any;
  constructor(private httpClient: HttpClient) { }

  //makes HTTP call to the Api
  private searchEnteries(keyword): Observable<any>{
    let params = {q: keyword}
    return this.httpClient.get(environment.baseUrl, {params}).pipe(
      map( response => {
        console.log(response);
        return this.searchResults = response['items'];
      })
    )
  } 

  public _searchEntries(term) {
    return this.searchEnteries(term);
  }
}
