import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CovidData} from "../../covid19API/interfaces/covid-data";


@Injectable({
  providedIn: 'root'
})
export class CovidService {

  private baseUrl : string = 'https://corona-api.com/countries'

  constructor(private http: HttpClient) { }

  getCovidData(): Observable<any> {
    return this.http.get<CovidData[]>(this.baseUrl)
  }

  getCovidDataByCountry(code: string) {
    return this.http.get<any>(this.baseUrl + '/' + code)
  }

}
