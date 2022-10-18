import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CityService {

  private baseUrl : string = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities'

  constructor(private http: HttpClient) { }

  getCityData(): Observable<any> {
    let headers = new HttpHeaders()
    headers = headers.set('x-rapidapi-key',  'KEY')
    const type = 'CITY'
    const minPopulation = 6000000
    const limit = 100
    return this.http.get<any>(this.baseUrl + '?types=' + type + '&minPopulation=' + minPopulation + '&limit=' + limit + '&excludedCountryIds=CN', {headers: headers})
  }

  getCity(lat: number, lon: number): Observable<any> {
    let headers = new HttpHeaders()
    headers = headers.set('x-rapidapi-key',  'a690c54dcbmshcc0f62dff246ddep1c5e52jsnd0bd8535acb3')
    const type = 'CITY'
    const minPopulation = 6000000
    const limit = 100
    return this.http.get<any>(this.baseUrl + '?types=' + type + '&minPopulation=' + minPopulation + '&limit=' + limit + '&excludedCountryIds=CN&latitide=' + lat + '&longitude=' + lon, {headers: headers})
  }

}
