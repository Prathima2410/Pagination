import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  Searchvalue : string;
  @Output()
  SearchtextChanged : EventEmitter<string> = new EventEmitter<string>();
  
  OnTextChange(){
    this.SearchtextChanged.emit(this.Searchvalue);
  }

}
