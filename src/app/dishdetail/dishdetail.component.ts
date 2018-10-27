import { Component, OnInit, ViewChild,  Inject } from '@angular/core';
import { Location } from '@angular/common';
import { Params, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DishService } from '../services/dish.service';

import { Comment } from '../shared/comment';
import { Dish } from '../shared/dish';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})

export class DishdetailComponent implements OnInit {

  @ViewChild('fform') commentFormDirective;

  dish: Dish;
  dishcopy = null;  // Use for returned value
  dishIds: number[];
  prev: number;
  next: number;
  // For store error message
  errMess: string;
  visibility = 'shown';


  // User feedback - Comment form
  commentForm: FormGroup;
  comment: Comment;
  // User feedback - Comment form errors and validation messages
  formErrors = {
    'author': '',
    'comment': '',
  };
  validationMessages = {
    'author': {
      'required': 'Author\'s name is required',
      'minLength': 'Author\'s name must be at least 2 character long',
    },
    'comment': {
      'required': 'Comment is required',
    },
  };

  constructor(private dishservice: DishService,
              private route: ActivatedRoute,
              private location: Location,
              private formbuilder: FormBuilder,
              @Inject('BaseURL') private BaseURL) {

                this.createForm();

              }

  ngOnInit() {
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);

    this.route.params
    .pipe(switchMap((params: Params) => {
      this.visibility = 'hidden';
      return this.dishservice.getDish(+params['id']);
    }))
    .subscribe(dish => {
      this.dish = dish;
      this.dishcopy = dish;
      this.setPrevNext(dish.id);
      this.visibility = 'shown';
    }, errmess => this.errMess = <any>errmess.message);

  }

  setPrevNext(dishId: number) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }

  createForm(): void {
    this.commentForm = this.formbuilder.group({
      author: ['', [Validators.required, Validators.minLength(2)]],
      rating: 5,
      comment: ['', [Validators.required]],
    });

    this.commentForm.valueChanges
        .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now

  }

  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.comment = this.commentForm.value;
    this.comment.date = new Date().toISOString();
    console.log(this.comment);
    this.dishcopy.comments.push(this.comment);
    this.dishcopy.save()
      .subscribe(dish => {
        this.dish = dish;
        console.log(this.dish);
      });
    this.commentForm.reset({
      author: '',
      rating: 5,
      comment: ''
    });
    // Reset form after submitting
    this.commentFormDirective.resetForm();
  }

}
