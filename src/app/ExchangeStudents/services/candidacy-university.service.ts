import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PartnerInstitution} from "../../core/model/PartnerInstitution";
import {CandidacyUniversity} from "../../core/model/candidacy-university";
import {Formation} from "../../core/model/Formation";

@Injectable({
  providedIn: 'root'
})
export class CandidacyUniversityService {

  constructor(private httpClient: HttpClient) { }

  getCandidacyByUniversity(id : number): Observable<CandidacyUniversity[]>{
    return this.httpClient.get<CandidacyUniversity[]>("http://localhost:8090/ExchangeStudentUniversity/getdemandsByUniversity/"+id);
  }
  getCandidacyByStudent(id : number): Observable<CandidacyUniversity[]>{
    return this.httpClient.get<CandidacyUniversity[]>("http://localhost:8090/ExchangeStudentUniversity/getdemandsByStudent/"+id);
  }

  getDemandsList(): Observable<CandidacyUniversity[]>{
    return this.httpClient.get<CandidacyUniversity[]>('http://localhost:8090/ExchangeStudentUniversity/getAllDemands');

  }

  AddDemandAndAffectToStudentAndUniversity(idS:number,idU:number,demand:CandidacyUniversity):Observable<CandidacyUniversity>{
    const headers = { 'content-type': 'application/json'}
    return this.httpClient.post<CandidacyUniversity>("http://localhost:8090/ExchangeStudentUniversity/addDemandAndAssignToStudentAndUniversity/"+idS+"/"+idU,demand );
  }

  AcceptDemand(d:CandidacyUniversity,idDemand:number):Observable<any>{
    const headers = { 'content-type': 'application/json'}
    return this.httpClient.put<CandidacyUniversity>("http://localhost:8090/ExchangeStudentUniversity/acceptttt/"+idDemand,d)
  }

  AddCvToDemand(d:CandidacyUniversity,idCV: string,idDemand:number):Observable<any>{
    const headers = { 'content-type': 'application/json'}
    return this.httpClient.put<CandidacyUniversity>("http://localhost:8090/ExchangeStudentUniversity/addCvToCandidacy/"+idCV+"/"+idDemand,d)
  }



}
