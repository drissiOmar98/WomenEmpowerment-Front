import { Component, OnInit } from '@angular/core';
import {Appointment} from "../core/model/Appointment";
import {ActivatedRoute, Router} from "@angular/router";
import {AppointmentService} from "../helpservice/appointment.service";

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent implements OnInit {

  currentAppointment = new Appointment();

  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private services: AppointmentService) { }
  ngOnInit(): void {
    this.services.consulterAppointment(this.activatedRoute.snapshot.params.id).
    subscribe( appoin =>{ this.currentAppointment = appoin; });
  }


  updateAppointment() {
    this.services.updateAppointment(this.currentAppointment).subscribe(() => {
        this.router.navigate(['appointment']);
      },(error) => { alert("Problème lors de la modification !"); }
    );
  }
}
