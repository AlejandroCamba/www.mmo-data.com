import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable, fromEvent, of, concat } from 'rxjs';
import { debounceTime, map, concatMap } from 'rxjs/operators';

interface SearchObject {
  id: number;
  name: string;
}

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements AfterViewInit {
  @Input() placeholder = '';
  @Input() $origin: Observable<SearchObject>;
  @ViewChild('searchbar') private _searchBar: ElementRef;

  private _$searchBarInput;

  ngAfterViewInit() {
    this._$searchBarInput = fromEvent(this._searchBar.nativeElement, 'keyup').pipe(
      debounceTime(400),
      concatMap(() => this.$origin)
    )
  }

}
