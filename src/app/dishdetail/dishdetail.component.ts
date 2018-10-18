import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Params, ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";

import { DishService } from "../services/dish.service";

import { Comment } from "../shared/comment";
import { Dish } from '../shared/dish';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})

export class DishdetailComponent implements OnInit {

  dish: Dish;
  dishIds: number[];
  prev: number;
  next: number;

  // Comment form
  commentForm: FormGroup;
  comment: Comment;

  constructor(private dishservice: DishService,
              private route: ActivatedRoute,
              private location: Location,
              private formbuilder: FormBuilder) {

                this.createForm();
               }

  ngOnInit() {
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);

    this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(+params['id'])))
                     .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
  }

  setPrevNext(dishId: number) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }

  createForm(){
    this.commentForm = this.formbuilder.group({
      author: '',
      rating: 5,
      comment: '',
    })
  }

  onSubmit(){
    this.comment = this.commentForm.value;
    console.log(this.comment);
    this.commentForm.reset();
  }

}
