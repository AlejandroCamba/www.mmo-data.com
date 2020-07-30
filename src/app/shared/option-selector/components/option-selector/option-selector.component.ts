import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-option-selector',
  templateUrl: './option-selector.component.html',
  styleUrls: ['./option-selector.component.scss']
})
export class OptionSelectorComponent implements OnInit {
  @Input() options: string[];
  selected = 'PS4';
  constructor() { }

  ngOnInit(): void {
  }

}
