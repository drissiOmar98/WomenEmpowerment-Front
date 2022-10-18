import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PartnerInstitution} from "../../core/model/PartnerInstitution";
import {PartnerInstitutionService} from "../services/partner-institution.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CommentService} from "../services/comment.service";
import {RatingUniversityService} from "../services/rating-university.service";
import {RatingUniversity} from "../../core/model/rating-university";

@Component({
  selector: 'app-list-of-univeritiesfront',
  templateUrl: './list-of-univeritiesfront.component.html',
  styleUrls: ['./list-of-univeritiesfront.component.css']
})
export class ListOfUniveritiesfrontComponent implements OnInit {
  //currentRate: number=5;
  partners: PartnerInstitution[] = [];
  partner: PartnerInstitution = new PartnerInstitution();

  comment: any = {};
  thumbnail: any;
  @Input('comment_id') id: number;


  public idUniversity:number;
  public idStudent : number;
  @Input()rate:RatingUniversity=new RatingUniversity;







  constructor(private partnerService: PartnerInstitutionService,private snackBar: MatSnackBar,private commentService:CommentService,private rateService:RatingUniversityService) { }

  ngOnInit(): void {
    this.getListPartner();
    this.getComment(this.id);

  }

  getListPartner(){
    this.partnerService.getPartnerList().subscribe(
      data => {
        this.partners = data;
      }
    );
    return this.partners;
  }

  getComment(id:any) {
    this.commentService.getCommentOfUniversity(id).subscribe(
      (data) => {
        this.comment = data;
      },
      (err) => console.error(err),
      () => console.log('comment loaded')
    );
  }

  setRate(){
    this.rateService.addRateAndAffectToStudentAndUniversity(this.rate,2,this.idUniversity).subscribe(
      data=>{
        console.log('response', data);
      }
    );
  }



}

