import { Injectable } from '@angular/core';
import { Dish } from "../shared/dish";
import { DISHES } from "../shared/dishes"; // To access to the const varaible DISHES

@Injectable({
  providedIn: 'root'
})
export class DishService {

  // Create a function in dish service
  getDish(id: number): Dish {
    return DISHES.filter((dish) => (dish.id === id))[0];
  }

  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => dish.featured)[0];
  }

  constructor() { }
}
