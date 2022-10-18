import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileService {


  constructor(private http: HttpClient) { }


/*
  /// define function to upload files
  upload(formData: FormData): Observable<HttpEvent<string[]>> {
    return this.http.post<string[]>(`${this.server}/file/upload`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  // define function to download files
  download(filename: string): Observable<HttpEvent<Blob>> {
    return this.http.get(`${this.server}/file/download/${filename}/`, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    });
  }*/

  uploadFile(file: FormData, i: number): Observable<any>
  {
    return this.http.post<any>('http://localhost:8090/ExchangeStudentUniversity/upload/'+i,file,{
      reportProgress: true,
      observe: 'events'
    });
  }

  uploadCv(candidateId : number, cv : File,universityId : number){
    let formdata: FormData = new FormData();
    formdata.append('file', cv);
    return this.http.post('http://localhost:8090/ExchangeStudentUniversity/uploadFile/'+candidateId+'/'+universityId, formdata)
  }
}
