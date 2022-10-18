import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CommentUniversity} from "../../core/model/comment-university";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }


  addCommentAndAffectToStudentAndUniversity(c:CommentUniversity,idStudent: number,idUniversity:number):Observable<CommentUniversity>
  {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(c);
    console.log(body)
    return this.http.post<CommentUniversity>("http://localhost:8090/ExchangeStudentUniversity/addCommentAndAffectToStudentAndUniversity/"+idStudent+"/"+idUniversity,c)
  }

 checkAllCommentsByUniversity(){}

  addSignal(com:CommentUniversity,i:number): Observable<any>{
    const headers = { 'content-type': 'application/json'}
    return this.http.put<CommentUniversity>("http://localhost:8090/ExchangeStudentUniversity/addSignal/"+i,com)
  }

  getCommentOfUniversity(id:number): Observable<CommentUniversity[]>{
    return this.http.get<CommentUniversity[]>("http://localhost:8090/ExchangeStudentUniversity/findAllCommentsByUniversityId/"+id);
  }
  getAllComments():Observable<CommentUniversity[]>{
    return this.http.get<CommentUniversity[]>("http://localhost:8090/ExchangeStudentUniversity/findAllComments");
  }



}
