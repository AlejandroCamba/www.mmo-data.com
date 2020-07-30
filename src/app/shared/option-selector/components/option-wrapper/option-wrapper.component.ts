import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { OptionSelectorComponent } from '../option-selector/option-selector.component';

@Component({
  selector: 'app-option-wrapper',
  templateUrl: './option-wrapper.component.html',
  styleUrls: ['./option-wrapper.component.scss']
})
export class OptionWrapperComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
