import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodCatolgueRoutingModule } from './food-catolgue-routing-module';
import { FoodCatolgueComponent } from '../food-catolgue/components/food-catolgue-component';


@NgModule({
  declarations: [
    FoodCatolgueComponent
  ],
  imports: [
    CommonModule,
    FoodCatolgueRoutingModule
  ]
})
export class FoodCatolgueModule { }
