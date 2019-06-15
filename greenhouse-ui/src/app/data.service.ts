import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Policy } from  './policy';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  PHP_API_SERVER = "http://192.168.178.62:80";

  readTemperatureData(): Observable<Policy[]>{
    return this.httpClient.get<Policy[]>(`${this.PHP_API_SERVER}/data/get_temperature_records.php`);
  }

  readBrightnessData(): Observable<Policy[]>{
    return this.httpClient.get<Policy[]>(`${this.PHP_API_SERVER}/data/get_brightness_records.php`);
  }

  readHumidityData(): Observable<Policy[]>{
    return this.httpClient.get<Policy[]>(`${this.PHP_API_SERVER}/data/get_humidity_records.php`);
  }

  constructor(private httpClient: HttpClient) { }
}
