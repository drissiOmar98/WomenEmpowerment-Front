import {Component, Input, OnInit} from '@angular/core';
import {Formation} from "../../core/model/Formation";
import {FormationService} from "../services/formation.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ChartType} from "angular-google-charts";
import {ShereService} from "../shared/shere.service";
import {NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels} from "ngx-qrcode2";

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  @Input() fr:Formation=new Formation;
  formation = new Formation();

  sowFormateur : boolean = false;

  listFomation : Formation[]=[];

  key: any;


  public imagePath :FileList;

  idF : number;
  elementType= NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.MEDIUM;



  type2 = ChartType.Bar;
  title = 'Numbre Apprenant By Formation';
  type = ChartType.PieChart;

  columnNames = ['Browser', 'Percentage'];
  options = {
  };
  width = 550;
  height = 400;


  data1:any;
  ArrayListT:any=[];

  name : string;




  constructor(private serviceForm : FormationService,private snackbar:MatSnackBar,private service : ShereService) { }

  ngOnInit(): void {
    console.log(this.idF);
    this.getformation()

    this.getNbrApprenantByFormation()
  }


  ToggleForm()
  {
    this.sowFormateur = ! this.sowFormateur;
  }


  dataId(i:number)
  {
    console.log(i);
    this.idF = i;
  }

  getformation(){
    this.serviceForm.getFormation().subscribe(
      (data:Formation[])=>{this.listFomation = data});

    return this.listFomation;
  }

  addFormation(i:number)
  {
    this.serviceForm.addFormation(this.fr,i).subscribe(
      data=>{
        this.getformation();
      });

    const formData = new FormData();

    for (let i = 0 ;i<this.imagePath.length ; i++)
    {
      const element  =  this.imagePath[i];

      formData.append('files',element);
    }




    this.serviceForm.uploadFile(formData,2).subscribe(res => {
      console.log(res)
    });

    this.snackbar.open(' ajout avec succees', 'Undo', {
      duration: 2000
    });





  }

  UpdateFormation(f: Formation,id : number)
  {

    this.serviceForm.updateFormation(f,id).subscribe(
      data=>{
        this.getformation();
      });

    this.snackbar.open(' Produit mis a jours avec succées', 'Undo', {
      duration: 2000
    });
  }

  deleteFormation(i :number)
  {
    this.serviceForm.deleteFormation(i)
      .subscribe(response => {
        this.listFomation = this.listFomation.filter(item => item.idFormation !== i);
      });
    this.snackbar.open(' delete successfully', 'Undo', {
      duration: 2000
    });
  }

  UpdateTable(){
    this.serviceForm.getFormation().subscribe(data => {
      this.listFomation = data;

    });
    this.UpdateTable2();
  }
  UpdateTable2(){
    this.serviceForm.getFormation().subscribe(data => {
      this.listFomation = data;

    });
  }

  assignApprenent(idA : number , idF : number , f : Formation )
  {
    this.serviceForm.affectationApptoFormation(idA, idF, f).subscribe();
  }


  getRevenueByFormation(idFormation: number) {

    this.serviceForm.getRevenueByFormation(idFormation).subscribe(
      (data:number)=>{this.data1 = data});

    return this.data1;
  }

  list88:Object[]=[]
  values:any=[]
  array1:any=[]
  data3:any=[]
  data2:any = this.getNbrApprenantByFormation();
  imgURL: any;





  getNbrApprenantByFormation()
  {

    this.serviceForm.getNbrApprenantByFormation().subscribe
    ((data:Object[])=>{this.list88 = data})
    console.log(this.list88)

    this.values = Array.from(this.list88.values());
    for (let i=0;i<this.values.length;i++) {
      this.array1 = Array.from(this.values[i]);
      //this.array1.push(this.values[i].customer,this.values[i].number_of_orders)
      this.data3.push(this.array1)

      this.data2=this.data3;
      //console.log(this.data3)
    }

  }


  public SearchFormation(key: any): void {
    console.log(key);
    const results: any[] = [];
    for (const s of this.listFomation) {
      if (s.domain.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(s);
      }
    }
    this.listFomation = results;
    if ( !key) {
      this.getformation();
    }

  }

  getid()
  {
   return  this.service.getDate();
  }




  onUpload() {



  }


  onFileSelected(event : any) {

    const file : FileList = event?.target?.files;


    var reader = new FileReader();

    this.imagePath = file;

    reader.readAsDataURL(file[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }


  SearchMultiple(key:string): void
  {
    this.serviceForm.SerachMultiple(key).subscribe(
      (data:Formation[]) => {
        this.listFomation =data
      }
    )
  }


  SearchHistrique(key:string): void
  {
    this.serviceForm.SerachRepi(key).subscribe(data => {
      console.log(data)
      }
    )

  }



}
