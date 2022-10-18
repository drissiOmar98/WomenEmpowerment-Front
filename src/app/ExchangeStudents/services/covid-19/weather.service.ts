import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private baseUrl : string = 'https://api.openweathermap.org/data/2.5/weather'

  constructor(private http: HttpClient) { }

  getWeatherData(lat: number, lon: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + '?lat=' + lat + '&lon=' + lon + '&units=metric&appid=' + '39b813f5ce22f1ac360d48aa1acf59b4')
  }

  // getWeatherData(name: string, country: string): Observable<any> {
  //   return this.http.get<any>(this.baseUrl + '?q=' + name + ',' + country + '&appid=' + openweatherApiKey)
  // }

}
