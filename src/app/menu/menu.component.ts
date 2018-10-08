import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';      // dish class
import { DISHES } from "../shared/dishes";  // dishes data
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  // You can write `dishes = DISHES` since JS can determine can figure out the type,
  // but in practice it is prefered to write in the below style for readability.
  dishes: Dish[];

  selectedDish: Dish;

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }

  // Implement "onSelect()" method here.
  onSelect(dish: Dish){
    this.selectedDish = dish;
  }

}
