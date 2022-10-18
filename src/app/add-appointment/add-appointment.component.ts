import { Component, OnInit } from '@angular/core';
import {Appointment} from "../core/model/Appointment";
import {AppointmentService} from "../helpservice/appointment.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
  newAppointment = new Appointment();
  message :string;
  constructor(private services : AppointmentService,
              private router :Router) { }
  ngOnInit(): void {
  }

  AddAppointment(){
    this.services.AddAppointment(this.newAppointment).subscribe(appoin => {
      console.log(appoin);

    });

    this.router.navigate(['appointment']).then(() => {
      window.location.reload();
    });

  }

}
