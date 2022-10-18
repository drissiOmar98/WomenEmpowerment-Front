import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShereService {

  data:any;

  constructor() { }

  getDate()
  {
    return this.data;
  }

  setDate(n :any)
  {
    this.data = n;
  }
}
