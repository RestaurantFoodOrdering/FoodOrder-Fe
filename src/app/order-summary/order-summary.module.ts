// src/app/order-summary/order-summary.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderSummarycomponent } from './components/order-summarycomponent';
import { OrderSummaryRoutingModule } from './order-summary-routing-module';


@NgModule({
  declarations: [
    OrderSummarycomponent   // declare your component here
  ],
  imports: [
    CommonModule,
    OrderSummaryRoutingModule
  ],
  exports: [
    OrderSummarycomponent  // optional, only if you want to use it outside this module
  ]
})
export class OrderSummaryModule {}
