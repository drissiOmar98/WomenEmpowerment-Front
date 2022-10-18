import { Component, OnInit } from '@angular/core';
import {Appointment} from "../core/model/Appointment";
import {AppointmentService} from "../helpservice/appointment.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointments: Appointment[];

  constructor(private services: AppointmentService, private router: Router) {

  }

  ngOnInit(): void {
    this.services.retrieveappointment().subscribe(data => {
      console.log(data);
      this.appointments = data;
    });
  }

  deleteAppointmentById(a: Appointment) {
    console.log("supp supprimé" + a);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.services.DeleteAppointment(a.idApp).subscribe(() => {
        console.log("appointment supprimé");
        this.SuprimerAppointmentDuTableau(a);
      });
  }

  SuprimerAppointmentDuTableau(appoin: Appointment) {
    this.appointments.forEach((cur, index) => {
      if (appoin.idApp === cur.idApp) {
        this.appointments.splice(index, 1);
      }
    });
  }

  public exportExcel() {
    this.services.exportExcelAppointment().subscribe(
      x => {
        const blob = new Blob([x], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,'});
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(blob);
          return;
        }
        const data = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = data;
        link.download = 'appointments.xlsx';
        link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));
        // tslint:disable-next-line:only-arrow-functions
        setTimeout(function () {
          window.URL.revokeObjectURL(data);
          link.remove();
        }, 100);
      });

  }


}
