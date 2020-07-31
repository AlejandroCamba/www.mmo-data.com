import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-item-viewer',
  templateUrl: './item-viewer.component.html',
  styleUrls: ['./item-viewer.component.scss'],
  animations: [
    trigger('toggleClick', [
      state(
        'false',
        style({
          height: '0',
        })
      ),
      state(
        'true',
        style({
          height: '100px',
        })
      ),
      transition('* => true', animate('250ms linear')), // animation timing
      transition('* => false', animate('250ms linear')),
    ]),
  ],
})
export class ItemViewerComponent implements OnInit {
  @Input() item;
  public active: string = 'daily';

  public caretState: boolean;

  constructor() {}

  ngOnInit(): void {}

  toggleCaret() {
    this.caretState = !this.caretState;
  }

  setActive(option) {
    this.active = option;
  }
}
