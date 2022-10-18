import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {React} from "../../core/model/react";
import {Observable} from "rxjs";
import {CommentUniversity} from "../../core/model/comment-university";

@Injectable({
  providedIn: 'root'
})
export class ReactService {

  constructor(private http: HttpClient) { }

  addReactForUniversity(r:React,idS:number,idU:number):Observable<React>{
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(r);
    console.log(body)
    return this.http.post<React>("http://localhost:8090/ExchangeStudentUniversity/addReactForUniversity/"+idS+"/"+idU,r)
  }
}
