import { Component } from '@angular/core';
import { Restaurant } from '../../Shared/models/Restaurant';
import { RestaurantService } from '../service/restaurant.service';
import { Router } from '@angular/router';
// Update the import path to match the actual file location and casing


@Component({
  selector: 'app-restaurant-listing',
  standalone: false,
  templateUrl: './restaurant-listing.html',
  styleUrl: './restaurant-listing.css'
})


export class RestaurantListing {


  public restaurantList: Restaurant[] = [];
  ngOnInit() {
    this.getAllRestaurants();
  }
  

  constructor(private router: Router, private restaurantService: RestaurantService) { }
  getAllRestaurants() {
    if (!this.restaurantService) {
      throw new Error('RestaurantService is not provided.');
    }
    this.restaurantService.getAllRestaurants().subscribe(
      (data: Restaurant[]) => {
        this.restaurantList = data;
      }
    );
  }
getRandomNumber(min: number, max: number): number {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomImage(): string {
  const imgcount=8;
  const randomIndex = this.getRandomNumber(1, imgcount);
  return `${randomIndex}.jpg`;
}

onButtonClick(id: number) {
  this.router.navigate(['/food-catologue', id]);
}

}
