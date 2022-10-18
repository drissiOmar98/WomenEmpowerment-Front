import {Component, Input, OnInit} from '@angular/core';
import {PartnerInstitution} from "../../core/model/PartnerInstitution";
import {ActivatedRoute} from "@angular/router";
import {PartnerInstitutionService} from "../services/partner-institution.service";
import {CommentService} from "../services/comment.service";
import {CommentUniversity} from "../../core/model/comment-university";
import {CandidacyUniversity} from "../../core/model/candidacy-university";
import {Observable, Subscriber} from "rxjs";
import * as tt from "@tomtom-international/web-sdk-maps";
import {environment} from "../../../environments/environment";
import {CandidacyUniversityService} from "../services/candidacy-university.service";
import {FileService} from "../services/file.service";
import { render } from 'creditcardpayments/creditCardPayments';
import {ToastrService} from "ngx-toastr";
import {ReactService} from "../services/react.service";
import {React} from "../../core/model/react";

@Component({
  selector: 'app-detail-front',
  templateUrl: './detail-front.component.html',
  styleUrls: ['./detail-front.component.css']
})
export class DetailFrontComponent implements OnInit {
  demands:CandidacyUniversity[] = [];
  university: PartnerInstitution = new PartnerInstitution();
  comments: CommentUniversity[] = [];
  @Input()comment:CommentUniversity= new CommentUniversity;
  @Input()demand:CandidacyUniversity= new CandidacyUniversity;
  @Input()react : React= new React;
  map1: any;
  public idUniversity:number;
  public idcom : number;
  candidate : any;
  cvs : any;
  imageUrl : string;
  cv : any;
  currentFileUpload: File;
  com:CommentUniversity= new CommentUniversity();

  constructor(private route: ActivatedRoute,private partnerService: PartnerInstitutionService,private commentService:CommentService,private demandService:CandidacyUniversityService,private fileService:FileService,private toastr: ToastrService,private ReactService:ReactService) {
    render(
      {
        id: "#payments",
        currency: "USD",
        value: "100.00",
        onApprove: (details) => {
          alert("Transaction Successfully")

        }
      }
    );
  }

  ngOnInit(): void {
   /* this.route.paramMap.subscribe(()=> {
      this.handleUniversityDetails();
    });*/
    this.idUniversity=this.route.snapshot.params['id'];
    console.log(this.idUniversity);
    this.handleUniversityDetails();
    this.getCommentSByUniversity();
  }

  handleUniversityDetails() {
    // @ts-ignore
    //this.idUniversity = +this.route.snapshot.paramMap.get('id');
    this.partnerService.getPartner(this.idUniversity).subscribe(
      data => {
        this.university = data;
      });
  }

  getListcomments(){
    this.commentService.getAllComments().subscribe(
      data => {
        this.comments = data;
      }
    );
    return this.comments;
  }

  getCommentSByUniversity(){
    this.commentService.getCommentOfUniversity(this.idUniversity).subscribe(
      data=>{
        this.comments=data
      }
    );
    return this.comments
  }
  addComment(){
    this.commentService.addCommentAndAffectToStudentAndUniversity(this.com,5,this.idUniversity).subscribe(
      data=>{
        console.log('response', data);
        this.getCommentSByUniversity();
      }
    );
  }
  addReact(){
    this.ReactService.addReactForUniversity(this.react,5,this.idUniversity).subscribe(
      data=>{
        console.log('response', data);
      }
    );
  }

  addDemand(){
    this.demandService.AddDemandAndAffectToStudentAndUniversity(2,this.idUniversity,this.demand).subscribe(
      data=>{
        console.log('response', data);
      }
    );
  }
report(com:CommentUniversity,idC:number){
    this.commentService.addSignal(com,idC).subscribe(
      data=>{
        console.log('response', data);
      }
    );
}

  // map api


  public ngAfterViewInit(): void {
    this.loadMap1();
  }
  private getCurrentPosition(): any {
    return new Observable((observer: Subscriber<any>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: any) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          observer.complete();
        });
      } else {
        observer.error();
      }
    });
  }

  private loadMap1(): void {
    this.map1 = tt.map({
      key: environment.tomtom.key,
      container: 'map',
    });

    this.map1.addControl(new tt.FullscreenControl());
    this.map1.addControl(new tt.NavigationControl());

    this.getCurrentPosition()
      .subscribe((position: any) => {
        this.map1.flyTo({
          center: {
            lat: position.latitude,
            lng: position.longitude,
          },
          zoom: 13,
        });

        const popup = new tt.Popup({ anchor: 'bottom', offset: { bottom: [0, -40] } }).setHTML('Angular TomTom');

        var marker = new tt.Marker().setLngLat({
          lat: 37.7749,
          lng: -122.4194,
        }).addTo(this.map1);
        marker.setPopup(popup).togglePopup();
      });





  }


  // define a function to upload files
  uploadCv(){
    this.fileService.uploadCv(2, this.currentFileUpload,this.idUniversity).subscribe(resp => {
      // @ts-ignore
      this.cv = resp.body;
      this.cvs.push(this.cv);


    });
  }
  selectFile(event:any){
    this.currentFileUpload = event.target.files.item(0);
  }

  showToastr(){
    this.toastr.success("your cv was updated successfully ","Upload CV Successfully");
  }

  showToastr1(){
    this.toastr.info("check your email for more details  ","Demand added  ");
  }

  showToastr2(){
    this.toastr.success("thanks for your report   ","Report added Successfully  ");
  }







}
