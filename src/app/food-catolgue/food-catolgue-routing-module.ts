import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodCatolgueComponent } from './components/food-catolgue-component';

const routes: Routes = [
  {
    path:'food-catologue/:id',component:FoodCatolgueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodCatolgueRoutingModule { }
