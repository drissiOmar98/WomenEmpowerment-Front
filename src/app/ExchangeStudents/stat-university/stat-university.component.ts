import { Component, OnInit } from '@angular/core';
import {PartnerInstitutionService} from "../services/partner-institution.service";
import {ToastrService} from "ngx-toastr";
import {StatistiqueServiceService} from "../services/statistique-service.service";
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Color, Label, SingleDataSet} from "ng2-charts";
import {HttpClient} from "@angular/common/http";
import {PartnerInstitution} from "../../core/model/PartnerInstitution";




@Component({
  selector: 'app-stat-university',
  templateUrl: './stat-university.component.html',
  styleUrls: ['./stat-university.component.css']
})
export class StatUniversityComponent implements OnInit {
  title = 'Number Students for  Each University';
  partner: PartnerInstitution = new PartnerInstitution();

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartLabels1: Label[] = [];
  public barChartLabels2: Label[] = [];

  public barChartType: ChartType = 'bar';
  public barChartType1: ChartType = 'pie';
  public barChartType2: ChartType = 'doughnut';


  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [];


  public barChartData1: ChartDataSets[] = [];

  public barChartData2: ChartDataSets[] = [];









  constructor(private partnerService: PartnerInstitutionService,private toastr: ToastrService,private stat: StatistiqueServiceService,private http: HttpClient) { }

  ngOnInit(): void {



  }

  getstatNbStudentByUniversity(){
    this.http.get<any[]>('http://localhost:8090/ExchangeStudentUniversity/statNumberStudentByUniversity').subscribe(
      data=>{this.barChartLabels=data.map(item=>item.label);
      this.barChartData=[{data : data.map(item=>item.y),label:'Universities'}]}
    )
  }

  getstatRating(){
    this.http.get<any[]>('http://localhost:8090/ExchangeStudentUniversity/statNumberGoodRatingsByUniversity').subscribe(
      data=>{this.barChartLabels=data.map(item=>item.label);
        this.barChartData1=[{data : data.map(item=>item.y),label:'GoodRating'}]},
      )

  }


  getNumberCommentByUniversity(){
    this.http.get<any[]>('http://localhost:8090/ExchangeStudentUniversity/statNumberCommentsByUniversity').subscribe(
      data=>{this.barChartLabels=data.map(item=>item.label);
        this.barChartData2=[{data : data.map(item=>item.y),label:'Comments'}]},
    )
  }



















}
