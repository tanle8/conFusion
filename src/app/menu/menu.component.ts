import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';      // dish class
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
  errMess: string;

  constructor(private dishService: DishService,
              @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes,
        errmess => this.errMess = <any>errmess);
  }

}
