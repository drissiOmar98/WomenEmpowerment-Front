import {Component, Input, OnInit} from '@angular/core';
import {FormationService} from "../services/formation.service";
import {User} from "../../core/model/User";
import {Formation} from "../../core/model/Formation";
import {NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels} from "ngx-qrcode2";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-fomateur',
  templateUrl: './add-fomateur.component.html',
  styleUrls: ['./add-fomateur.component.css']
})
export class AddFomateurComponent implements OnInit {

  listFomation : Formation[];
  @Input() fr:Formation=new Formation;
  idF : number;

  elementType= NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.MEDIUM;
  formateur : User;
  imgURL: any;
  public imagePath :FileList;
  show : boolean = false;

  constructor(private services : FormationService,private snackbar:MatSnackBar) {

    this.getformation()
  }

  ngOnInit(): void {
    this.formateur = new User();
  }


  getformation(){
    this.services.getFormation().subscribe(
      (data:Formation[])=>{this.listFomation = data});

    return this.listFomation;
  }

  dataId(i:number)
  {
    console.log(i);
    this.idF = i;
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

  UpdateFormation(f: Formation,id : number)
  {

    this.services.updateFormation(f,id).subscribe(
      data=>{
        this.getformation();
      });

  }

  ToggleForm()
  {
    this.show = ! this.show;
  }

  addFormation(i:number)
  {

    this.services.addFormation(this.fr,i).subscribe(
      data=>{
        this.getformation();
      });

    const formData = new FormData();

    for (let i = 0 ;i<this.imagePath.length ; i++)
    {
      const element  =  this.imagePath[i];

      formData.append('files',element);
    }

    this.snackbar.open(' ajout avec succees', '', {
      duration: 2000
    });



    this.services.uploadFile(formData,1).subscribe(res => {
      console.log(res)
    });






  }




  deleteFormation(i :number)
  {
    this.services.deleteFormation(i)
      .subscribe(response => {
        this.listFomation = this.listFomation.filter(item => item.idFormation !== i);
      });
  }
  /*
  addFormateur()
  {
    this.services.addFormateur(this.formateur).subscribe(
      ()=> this.listFormateur = [this.formateur ,...this.listFormateur]
    );
  }

    UpdateFormation(value: any, idFormateur: number)
    {
      this.services.updateFormateur(this.formateur).subscribe(
        ()=> this.listFormateur = [this.formateur ,...this.listFormateur]
      );
    }

    deleteFormation(i :number)
    {
      this.services.deleteFormateur(i).subscribe(response => {
        this.listFormateur = this.listFormateur.filter(item => item.idFormateur !== i);
        this.UpdateTable();
      });
    }

    UpdateTable(){
      this.services.getFormateur().subscribe(data => {
        this.listFormateur = data;

      });
      this.UpdateTable2();
    }
    UpdateTable2(){
      this.services.getFormateur().subscribe(data => {
        this.listFormateur = data;

      });
    }
  */
  ExportPDF() {
    this.services.exportPDF().subscribe(
      x=>
      {
        const blob = new Blob([x],{type : 'application/pdf'})

        if(window.navigator && window.navigator.msSaveOrOpenBlob)
        {
          window.navigator.msSaveOrOpenBlob(blob);
          return;
        }

        const data = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = data;
        link.download = 'formation.pdf';
        link.dispatchEvent( new MouseEvent('click',{bubbles:true,cancelable:true,view:window}))

        setTimeout(function () {
        window.URL.revokeObjectURL(data);
        link.remove();
        },1000)

      }
    )

  }
}
