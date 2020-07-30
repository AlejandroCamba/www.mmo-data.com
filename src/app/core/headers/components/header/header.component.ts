import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public options = [
    'option 1',
    'options 2'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
