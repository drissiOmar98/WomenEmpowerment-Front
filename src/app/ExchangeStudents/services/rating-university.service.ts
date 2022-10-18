import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RatingUniversity} from "../../core/model/rating-university";
import {Observable} from "rxjs";
import {CommentUniversity} from "../../core/model/comment-university";

@Injectable({
  providedIn: 'root'
})
export class RatingUniversityService {

  constructor(private http: HttpClient) { }


  addRateAndAffectToStudentAndUniversity(r:RatingUniversity,idStudent: number,idUniversity:number):Observable<RatingUniversity>{
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(r);
    console.log(body)

    return this.http.post<RatingUniversity>("http://localhost:8090/ExchangeStudentUniversity/addRateAndAffectToStudentAndUniversity/"+idStudent+"/"+idUniversity,r)

  }
}
