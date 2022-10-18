import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormationService} from "../services/formation.service";
import {ShereService} from "../shared/shere.service";
import {User} from "../../core/model/User";
import {Info} from "../../core/model/Info";

@Component({
  selector: 'app-list-fomateur',
  templateUrl: './list-fomateur.component.html',
  styleUrls: ['./list-fomateur.component.css']
})
export class ListFomateurComponent implements OnInit {

  listFormateur  : User[];

  name : string;

  @Input() idForma : number;

  @Output() eventForm = new EventEmitter<number>();
  p: any;

  toggle = true;


   form : Info[];

  requiredData: any[]=[];


  enableDisableRule() {
    this.toggle = !this.toggle;
  }


  constructor(private serviceForm : FormationService,private service : ShereService) {
   this.getFormateurRemunerationMaxSalaireTrie();

   this.getFormateur();
  }

  ngOnInit(): void {
 console.log(this.name);

  }

  getFormateur()
  {
    this.serviceForm.getFormateur().subscribe(
      (data: User[]) => this.listFormateur = data);
  }




  sendIdF(i :number)
  {
   // console.log(i);
    this.eventForm.emit(i);
  }


  sendId(i :number)
  {
    this.service.setDate(i);
  }


  list88:Object[]=[]
  values:any=[]
  array1:any=[]
  data3:any=[]
 // data2:any = this.getFormateurRemunerationMaxSalaireTrie();

  getFormateurRemunerationMaxSalaireTrie( ) {
    this.serviceForm.getFormateurRemunerationMaxSalaireTrie().subscribe((mapData: any[]) => {
      this.requiredData= mapData;
    });

    return this.requiredData;

/*
    this.values = Array.from(this.list88.values());
    for (let i = 0; i < this.values.length; i++) {
      this.array1 = Array.from(this.values[i]);
      //this.array1.push(this.values[i].customer,this.values[i].number_of_orders)
      this.data3.push(this.array1)

      this.data2 = this.data3;
    }

 */
  }






}
