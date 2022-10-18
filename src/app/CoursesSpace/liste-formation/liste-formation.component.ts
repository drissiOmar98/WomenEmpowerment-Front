import { Component, OnInit } from '@angular/core';
import {FormationService} from "../services/formation.service";
import {Formation} from "../../core/model/Formation";
import {MatSnackBar} from "@angular/material/snack-bar";
import {User} from "../../core/model/User";


@Component({
  selector: 'app-liste-formation',
  templateUrl: './liste-formation.component.html',
  styleUrls: ['./liste-formation.component.css']
})
export class ListeFormationComponent implements OnInit {

  listFormation  : Formation[];
  toggle = true;
  domain : string;

   nbrlikes : number;
   nbrDislikes : number;

  listApprenent : User[];
  sowFormateur : boolean = false;

  constructor(private serviceForm : FormationService,private snackbar:MatSnackBar) {

    // Methode  subscribe recuperer la liste de donnee .
    this.getAllFormation()
  }

  ngOnInit(): void {


  }


  getAllFormation()
  {
    return  this.serviceForm.getFormation().subscribe(
      (data : Formation[]) => this.listFormation = data);
  }


  ToggleForm()
  {
    this.sowFormateur = ! this.sowFormateur;
  }


  enableDisableRule() {
    this.toggle = !this.toggle;
  }


  affectationApptoFormation(idApp :number , idFor : number,f :Formation)
  {
    this.serviceForm.affectationApptoFormation(idApp, idFor, f).subscribe();
    this.snackbar.open(' ajout avec succees ', 'Back', {
      duration: 2000
    });
  }


  getApprenantByFormation(i : number)
  {
    this.serviceForm.getApprenantByFormation(i).subscribe(
      (data:User[])=>{this.listApprenent = data});
    return this.listApprenent;
  }


  addLikes(i:number)
  {
    this.serviceForm.addLikes(i).subscribe(
      data=>{
        this.getAllFormation();
      }
    );

    this.snackbar.open(' ajout Likes avec succees', '', {
      duration: 2000
    });
  }

  addDisLikes(i:number)
  {
    this.serviceForm.addDisLikes(i).subscribe(
      data=>{
        this.getAllFormation();
      }
    );

    this.snackbar.open(' ajout DisLikes avec succees', '', {
      duration: 2000
    });
  }




  SearchMultiple(key:string): void
  {
    if (key=='') {
      this.getAllFormation()
    }
    else if (key!=null)
    {
      this.serviceForm.SerachMultiple(key).subscribe(
        (data:Formation[]) => {
          this.listFormation =data
        }
      );
    }

  }

}
