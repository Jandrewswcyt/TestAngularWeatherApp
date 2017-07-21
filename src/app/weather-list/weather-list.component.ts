import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {

httpBirmReq = 'http://api.openweathermap.org/data/2.5/forecast?id=2655603&APPID=74c2d5b8ad89064823b33d816c20e5e5&units=metric';

httpPershoreReq = 'http://api.openweathermap.org/data/2.5/forecast?id=2640360&APPID=74c2d5b8ad89064823b33d816c20e5e5&units=metric';

httpLondonReq = 'http://api.openweathermap.org/data/2.5/forecast?id=2643743&APPID=74c2d5b8ad89064823b33d816c20e5e5&units=metric';

  weatherObjs: Response[] = [
  ];
  constructor(private weatherService: WeatherService) { }

dummyData: Response;

  ngOnInit() {
    this.getService(this.httpLondonReq);
    this.getService(this.httpPershoreReq);
    this.getService(this.httpBirmReq);
  }

    getService(httpReq: string) {
    this.weatherService.getWeather(httpReq).subscribe((weather: Response) => {
      console.log(weather);
        this.weatherObjs.push(weather);
      },
      (error: Error) => console.log(error)
    );
  }

}
