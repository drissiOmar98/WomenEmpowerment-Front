import {Formation} from "./Formation";
import {Result} from "./Result";

export class User {

  id !: number;
  displayName!:string;
  firstName ! : string;
  lastName ! : string;
  phoneNumber !:number;
  priceconsultation!:number;
  email !:string;
  tarifHoraire !:number;
  profession!:String;
  salary! : number;
  age!:number;
  state!:string;
  password: any;
  matchingPassword: any;
  results!:Result[];

  isOnline: Boolean;



}
