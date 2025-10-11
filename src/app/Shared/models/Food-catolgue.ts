// Make sure to import or define Restaurant and FoodItem types above if not already done
// import { Restaurant } from './Restaurant';
// import { FoodItem } from './FoodItem';

import { FoodItem } from "./FoodItem";
import { Restaurant } from "./Restaurant";

export interface FoodCatalogue {
    fooditemlist: FoodItem[];
    restaurant: Restaurant;
}