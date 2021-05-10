import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, switchMap, catchError } from "rxjs/operators";
import { SearchService } from '../shared/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  public loading: Boolean;
  public searchResults: any;
  public paginationElements: any;
  public errorMessage: any;

  constructor(private searchService: SearchService) { }
  
  public searchForm = new FormGroup({
    search: new FormControl("", Validators.required)
  })

  public search() {
    this.searchForm.get("search").valueChanges.pipe(
      map((term: any) => {
        // console.log(term);
        // return e.target.value;
        return term;
      }),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(term => {
        this.loading = true;
        if(term == '') {
          return of(null);
        } else {
          return this.searchService._searchEntries(term)
        }
      }),
      catchError((err) => {
        console.log(err);
        this.loading = false;
        this.errorMessage = err.message;
        return throwError(err);
      })
    ).subscribe( value => {
      this.loading = false;
      this.searchResults = value;
      this.paginationElements = this.searchResults;
    })
  }

  ngOnInit(): void {
    this.search();
  }
}
