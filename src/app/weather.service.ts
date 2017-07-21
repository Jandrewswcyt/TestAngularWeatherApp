import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  getWeather(httpReq: string): Observable<Response> {
     return this.http.get(httpReq).map((res: Response)  => res.json());
  }

}
