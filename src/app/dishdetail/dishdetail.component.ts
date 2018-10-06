import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';


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

    constructor() { }

    ngOnInit() {
    }

}
