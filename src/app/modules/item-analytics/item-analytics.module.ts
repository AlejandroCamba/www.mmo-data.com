import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ItemAnalyticsRoutingModule } from './item-analytics-routing.module';
import { SearchbarModule } from '../../shared/searchbar/searchbar.module';
import { PricesComponent } from './pages/prices/prices.component';
import { ItemViewerComponent } from './components/item-viewer/item-viewer.component';
import { LinearChartModule } from '../../shared/charts/linear-chart/linear-chart.module';

@NgModule({
  declarations: [MainComponent, PricesComponent, ItemViewerComponent],
  imports: [
    CommonModule,
    ItemAnalyticsRoutingModule,
    SearchbarModule,
    LinearChartModule,
  ],
})
export class ItemAnalyticsModule {}
