import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class StatistiqueServiceService {



  constructor(private http : HttpClient) { }

  getstatNumberSadReactsByUniversity():Observable<Object[]>
  {

    return this.http
      .get<Object[]>("http://localhost:8090/ExchangeStudentUniversity/statNumberSadReactsByUniversity")
  }
}
