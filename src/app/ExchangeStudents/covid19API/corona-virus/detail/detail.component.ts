import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CovidService} from "../../../services/covid-19/covid.service";
import {CovidData} from "../../interfaces/covid-data";


declare let google: any

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  data!: CovidData
  country!: string

  constructor(private covidService : CovidService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.country = this.activatedRoute.snapshot.paramMap.get('country') || ''

    this.covidService.getCovidDataByCountry(this.country).subscribe(response => {
      this.data = response.data
      this.drawChart()
    })
  }

  drawChart() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(() => {
      var data = google.visualization.arrayToDataTable([
        ['Cases', 'Total'],
        ['Active', this.data.latest_data.critical],
        ['Recovered', this.data.latest_data.recovered],
        ['Deceased', this.data.latest_data.deaths]
      ]);

      var options = {
        slices: {
          0: { color: '0275d8' },
          1: { color: '5bc0de' },
          2: { color: 'f0ad4e' }
        },
        chartArea: { width: '90%', height: '90%', top: 0 },
        legend: { position: 'bottom', alignment: 'center' },
      };

      var chart = new google.visualization.PieChart(document.getElementById('piechart'));

      chart.draw(data, options);
    });
  }

  back() {
    this.router.navigate(['../../'], { relativeTo: this.activatedRoute })
  }
}
