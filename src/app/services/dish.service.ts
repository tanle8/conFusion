import { Injectable } from '@angular/core';
import { Dish } from "../shared/dish";
import { DISHES } from "../shared/dishes"; // To access to the const varaible DISHES

@Injectable({
  providedIn: 'root'
})
export class DishService {

  // Create a function in dish service
  getDishes(): Dish[] {
    return DISHES;
  }

  constructor() { }
}
