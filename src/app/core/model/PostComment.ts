import {Likes} from "./likes";
import {DisLikes} from "./DisLikes";
import {User} from "./User";

export class PostComment {

  idComn!:number;
  message!:string;
  createAt!:Date;
  nbrLikes!:number;
  nbrDisLikes!:number;
  likes : Likes[];
  dislikes:DisLikes[];
  userC!:User;
}
