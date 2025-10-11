import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderSummarycomponent } from './components/order-summarycomponent';

const routes: Routes = [
  {
    path:'orderSummary',component:OrderSummarycomponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderSummaryRoutingModule { }
