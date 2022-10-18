import {Component, Input, OnInit} from '@angular/core';
import {CandidacyUniversity} from "../../core/model/candidacy-university";
import {CandidacyUniversityService} from "../services/candidacy-university.service";
import {ActivatedRoute} from "@angular/router";
import {PartnerInstitutionService} from "../services/partner-institution.service";
import {PartnerInstitution} from "../../core/model/PartnerInstitution";

@Component({
  selector: 'app-list-of-demandsfor-university',
  templateUrl: './list-of-demandsfor-university.component.html',
  styleUrls: ['./list-of-demandsfor-university.component.css']
})
export class ListOfDemandsforUniversityComponent implements OnInit {

  demands:CandidacyUniversity[] = [];
  partners: PartnerInstitution[]=[];
  @Input()demand: CandidacyUniversity = new CandidacyUniversity();
  university: PartnerInstitution = new PartnerInstitution();
  public idUniversity:number;
  public idDemand:number;

  candidate:CandidacyUniversity=new CandidacyUniversity();
  public AcceptDemand: CandidacyUniversity;

  constructor(private demandService:CandidacyUniversityService,private route: ActivatedRoute ,private partnerService:PartnerInstitutionService) { }

  ngOnInit(): void {

    /*this.route.paramMap.subscribe(()=> {
      this.handleUniversityDemands();
      this.getListDemands();
    });*/
    this.idUniversity=this.route.snapshot.params['id'];
    console.log(this.idUniversity);
    this.getDemandsByUniversity();


  }

  getListDemands(){
    this.demandService.getDemandsList().subscribe(
      data => {
        this.demands = data;
      }
    );
    return this.demands;
  }



  getDemandsByUniversity(){
    this.demandService.getCandidacyByUniversity(this.idUniversity).subscribe(
        data=>{
          this.demands=data;
        }
    );
  }
  acceptDEmand(d:CandidacyUniversity,id:number){
    this.demandService.AcceptDemand(d,id).subscribe(
      data=>{
        this.candidate=data;
      }
    );
  }


  handleUniversityDemands() {
    // @ts-ignore
    let theProductId = +this.route.snapshot.paramMap.get('id');
    this.demandService.getCandidacyByUniversity(theProductId).subscribe(
      data => {
        this.demand.partnerInstitution.candidacies = data;
      });
  }

 /* addDemand(idS:number,idU:number,date:Date){
    this.demandService.AddDemandAndAffectToStudentAndUniversity(idS,idU,date).subscribe(
      data =>{
        console.log('response', data);
        this.getListDemands();
      }
    );

  }*/



}
