import {Result} from "./Result";


export class Quiz {

  idQuiz! : number;
  title !: string;
  score !: number;
  createAt !:Date;
  content !: string ;
  results:Result[]

}
