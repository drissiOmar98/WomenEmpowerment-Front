import { formatNumber } from '@angular/common';
import { Component, HostListener, Inject, Input, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { } from "@googlemaps/google-maps-services-js";
import {CovidService} from "../../../services/covid-19/covid.service";
import {CovidData} from "../../interfaces/covid-data";

declare let google: any;

@Component({
  selector: 'app-covid-map',
  templateUrl: './covid-map.component.html',
  styleUrls: ['./covid-map.component.css']
})
export class CovidMapComponent implements OnInit {

  @Input() view = { title: 'Cases Per Million People', color: 'd9534f' }
  private data = []

  constructor(private covidService : CovidService, private router: Router, private activatedRoute: ActivatedRoute, @Inject(LOCALE_ID) private locale: string) { }

  ngOnInit(): void {
    this.covidService.getCovidData().subscribe(response => {
      this.data = response.data.map((country: CovidData) => [{ v: country.code, f: ''}, this.viewData(country), this.tooltip(country)])
      this.drawMap()
    })
  }

  drawMap() {
    google.charts.load('current', {
      'packages': ['geochart'],
      'mapsApiKey': 'Key'
    });

    google.charts.setOnLoadCallback(() => {
      let data = new google.visualization.DataTable()
      data.addColumn('string', 'Country')
      data.addColumn('number', 'Confirmed')
      data.addColumn({ type: 'string', role: 'tooltip', 'p': { 'html': true } })
      data.addRows(this.data)

      let options = {
        geochartVersion: 11,
        domain: 'IN',
        width: window.innerWidth,
        keepAspectRatio: true,
        colorAxis: { colors: ['f7f7f7', this.view.color] },
        tooltip: { isHtml: true, trigger: focus }
      };

      let chart = new google.visualization.GeoChart(document.getElementById('regions_div'))
      chart.draw(data, options)

      google.visualization.events.addListener(chart, 'select', () => {
        var selectedItem = chart.getSelection()[0]
        if (selectedItem) {
          let country = data.getValue(selectedItem.row, 0)
          this.router.navigate(['detail', country], { relativeTo: this.activatedRoute })
        }
      });
    });
  }

  viewData(country: CovidData) {
    switch (this.view.title) {
      case 'Active Covid Cases': return country.latest_data.critical
      case 'Total Confirmed Covid Cases': return country.latest_data.confirmed
      case 'Total Recovered Covid Cases': return country.latest_data.recovered
      case 'Total Deceased Covid Cases': return country.latest_data.deaths
      default: return country.latest_data.calculated.cases_per_million_population
    }
  }

  tooltip(country: CovidData) {
    return '<div style="white-space: nowrap;">' +
      '<div class="mb-1">' + this.view.title + '</div>' +
      '<div>' + country.name + ': ' +
      '<b>' + formatNumber(this.viewData(country) || 0, this.locale) + '</b></div>'
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.drawMap()
  }

}
