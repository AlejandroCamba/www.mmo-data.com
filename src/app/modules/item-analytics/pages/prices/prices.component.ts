import { Component, OnInit } from '@angular/core';

const sampleItem = {
  name: 'Spriggans Sword',
  averagePrice: 57.345,
  description: '',
  labelColor: '#542034',
  location: '',
  prices: {
    labels: [],
    daily: [],
    weekly: [],
    monthly: [],
    yearly: []
  }
}

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {
  public item = sampleItem;
  
  constructor() { }

  ngOnInit(): void {
  }

}
