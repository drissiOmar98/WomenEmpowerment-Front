import {Component, Input, OnInit} from '@angular/core';
import {ComplaintService} from "../helpservice/complaint.service";
import {Router} from "@angular/router";
import {Complaint} from "../core/model/Complaint";
import {User} from "../core/model/User";


@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.css']
})
export class AddComplaintComponent implements OnInit {

  @Input() newComplaint:Complaint = new Complaint();
  idCom : number;
  user : User;
  message :string;
  constructor(private complaintService  : ComplaintService,
              private router :Router) { }

  ngOnInit(): void {
    this.user=new  User();
  }
  AddComplaint(){
    this.complaintService.AddComplaint(this.newComplaint).subscribe(complaint => {
      console.log(complaint);

    });


    this.router.navigate(['complaint']).then(() => {
      window.location.reload();
    });

  }

}
