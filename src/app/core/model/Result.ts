import {Quiz} from "./Quiz";
import {User} from "./User";

export class Result {

  idR:number;
  username : string;
  correctAnswer:number;
  inCorrectAnswer:number;
  totalCorrect : number;
  quiz:Quiz;
  suser!:User;



}
