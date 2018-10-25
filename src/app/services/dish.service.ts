import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Http, Response } from '@angular/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Restangular } from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private restangular: Restangular,
              private processHTTPMessage: ProcessHTTPMsgService) { }

  getDishes(): Observable<Dish[]> {
    // return Promise.resolve(DISHES);
    // return new Promise(resolve => {
    //   // Simulate server latency with 2 second delay
    //   setTimeout(() => resolve(DISHES), 2000);
    // });
    // return of(DISHES).pipe(delay(2000));
    // return this.http.get<Dish[]>(baseURL + 'dishes')
    //   .pipe(catchError(this.processHTTPMessage.handleError));
    return this.restangular.all('dishes').getList();
  }
  getDish(id: number): Observable<Dish> {
    // return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
    // return new Promise(resolve => {
    //   // Simulate server latency with 2 second delay
    //   setTimeout(() => resolve(DISHES.filter((dish) =>
    //     (dish.id === id))[0]), 2000)
    // });
    // return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
    // return this.http.get<Dish>(baseURL + 'dishes/' + id)
    //   .pipe(catchError(this.processHTTPMessage.handleError));
    return this.restangular.one('dishes', id).get();
  }
  getFeaturedDish(): Observable<Dish> {
    // return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(DISHES.filter((dish) =>
    //     dish.featured)[0]), 2000)
    // })
    // return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
    // return this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(
    //   map(dishes => dishes[0]))
    //   .pipe(catchError(this.processHTTPMessage.handleError));
    return this.restangular.all('dishes').getList({featured: true})
      .pipe(map(dishes => dishes[0]));
  }
  getDishIds(): Observable<number[] | any> {
    // return of(DISHES.map(dish => dish.id));
    // return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)))
    //   .pipe(catchError(error => error));
    return this.getDishes()
      .pipe(map(dishes => dishes.map(dish => dish.id)),
        catchError(error => error));
  }

}
