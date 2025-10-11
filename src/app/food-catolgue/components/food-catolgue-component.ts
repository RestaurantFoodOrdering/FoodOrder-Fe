import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodItemService } from '../services/fooditemservice';
import { FoodCatalogue } from '../../Shared/models/Food-catolgue';
import { FoodItem } from '../../Shared/models/FoodItem';
import { Restaurant } from '../../Shared/models/Restaurant';


@Component({
  selector: 'app-food-catolgue-component',
  standalone: false,
  templateUrl: './food-catolgue-component.html',
  styleUrl: './food-catolgue-component.css'
})
export class FoodCatolgueComponent {
foodItemResponse?: FoodCatalogue;
restaurantid?: number ;
foodItemCart:FoodItem[]=[];
orderSummary?:FoodCatalogue;  
constructor(private route: ActivatedRoute,private foodItemService: FoodItemService,private router: Router) { 

}
ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.restaurantid = Number(params.get('id'));
    if (this.restaurantid!=0) {
      this.getFoodItemsByRestaurant(this.restaurantid);
    } else {
      console.error('Invalid restaurant ID');
    }
  });

}  
getFoodItemsByRestaurant(restaurant: number) {
    this.foodItemService.getFoodItemsByRestaurant(restaurant).subscribe(
      (data:any)  => {
        this.foodItemResponse= data;}
      );
  }
  increment(food:any){
    food.quantity+=1;
    const index=this.foodItemCart.findIndex((item)=>item.id===food.id);
    if(index===-1){
      this.foodItemCart.push(food);
    }
      else{
        this.foodItemCart[index]=food;
      }
  }
  decrement(food:any){  
    if(food.quantity>0){
      food.quantity-=1;
    }
    const index=this.foodItemCart.findIndex((item)=>item.id===food.id);
    if(this.foodItemCart[index].quantity==0  ){
      this.foodItemCart.splice(index,1);
    }
    else{
      this.foodItemCart[index]=food;
    }
  }
  onCheckOut(){
    this.orderSummary={
      fooditemlist:[],
      restaurant:null
    } 
    this.orderSummary.fooditemlist=this.foodItemCart;
    this.orderSummary.restaurant = this.foodItemResponse?.restaurant 
    this.router.navigate(['/orderSummary'], { queryParams: { data: JSON.stringify(this.orderSummary) } });

}
}
