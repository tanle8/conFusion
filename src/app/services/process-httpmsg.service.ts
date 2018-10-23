import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcessHTTPMsgService {

  constructor() { }

  /**
   * extractData
   * res: Response
   **/
  public extractData(res: Response) {
    // tslint:disable-next-line:prefer-const
    let body = res.json();

    return body || { };
  }

  /**
   * handleError
   * param: error - handle an error response from the server
   *        any   - or any other reason that the error arises
   */
  public handleError(error: HttpErrorResponse | any) {
    let errMsg: string;

    if (error.error instanceof ErrorEvent) {
      errMsg = error.error.message;
    } else {
      errMsg = `${error.status} - ${error.statusText || ''} ${error.error}`;
    }

    return throwError(errMsg);
  }

}
