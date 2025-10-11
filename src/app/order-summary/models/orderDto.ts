import { FoodItem } from "../../Shared/models/FoodItem";
import { Restaurant } from "../../Shared/models/Restaurant";

export interface OrderDto {
    fooditemlist: FoodItem[];
    restaurant: Restaurant;
    userid: number;
}