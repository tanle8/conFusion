import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

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
}
