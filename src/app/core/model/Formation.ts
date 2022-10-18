import {PostComment} from "./PostComment";
import {User} from "./User";
import {Files} from "./files";
import {Quiz} from "./Quiz";

export class Formation {

  idFormation!:number;
  title!:string;
  level!:string;
  start!:Date;
  end!:Date;
  nbrHeures!:number;
  domain!:string;
  nbrMaxParticipant!:number;
  frais!:number;
  rating!:number;
  lieu!: string;
  formateur!:User;
  databaseFiles!:Files[];
  postComments!:PostComment[];
  apprenant!:User[];
  quizzes!:Quiz[];





}
