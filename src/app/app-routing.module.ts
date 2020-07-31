import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: 'item-analytics', pathMatch: 'full'
  },
  {
    path: 'item-analytics', loadChildren: () => import('./modules/item-analytics/item-analytics.module').then(m => m.ItemAnalyticsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
