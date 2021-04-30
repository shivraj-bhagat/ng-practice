import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject, throwError } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, switchMap, catchError } from "rxjs/operators";
import { SearchService } from '../shared/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy{

  constructor(private searchService: SearchService) { }

  public loading: Boolean;
  public searchTerm = new Subject<string>();
  public searchResults: any;
  public paginationElements: any;
  public errorMessage: any;
  
  public searchForm = new FormGroup({
    search: new FormControl("", Validators.required)
  })

  public search() {
    this.searchTerm.pipe(
      map((e: any) => {
        // console.log(e.target.value);
        return e.target.value;
      }),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(term => {
        this.loading = true;
        return this.searchService._searchEntries(term)
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

  ngOnDestroy() {
    this.searchTerm.unsubscribe();
  }

}
