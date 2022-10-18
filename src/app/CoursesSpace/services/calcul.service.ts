import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  constructor() { }


  getNumbreOf(list : any[] , criteria: string , value : any )
  {
    let n = 0;

    for (let i in list)
    {
      if(list[i][criteria] === value)
      {
        n++;
      }
    }
    return n;
  }

}
