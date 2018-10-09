import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';

import { DishService } from "../services/dish.service";

import { Params, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

    // By using Input module, we declare a decorator for this Dish variable that
    // is defined below
    @Input()
    dish: Dish;

    constructor(private dishservice: DishService,
                private route: ActivatedRoute,
                private location: Location) { }

    ngOnInit() {
      const id = +this.route.snapshot.params['id'];
      this.dish = this.dishservice.getDish(id);
    }

    goBack(): void {
      this.location.back();
    }

}
