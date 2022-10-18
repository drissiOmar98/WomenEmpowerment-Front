import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {PartnerInstitution} from "../../core/model/PartnerInstitution";
import {PartnerInstitutionService} from "../services/partner-institution.service";
import {Observable, Subscriber} from "rxjs";
import * as tt from "@tomtom-international/web-sdk-maps";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-add-partner-institution',
  templateUrl: './add-partner-institution.component.html',
  styleUrls: ['./add-partner-institution.component.css']
})
export class AddPartnerInstitutionComponent implements OnInit {

  partner: PartnerInstitution = new PartnerInstitution();

  /*constructor(private partnerService: PartnerInstitutionService, private router: Router, private activatedRoute: ActivatedRoute) {
    const isIdPresent = this.activatedRoute.snapshot.paramMap.has('id');
    if (isIdPresent){
      let id: number;
      // @ts-ignore
      id = +this.activatedRoute.snapshot.paramMap.get('id');
      this.partnerService.getPartner(id).subscribe(
        data => {this.partner = data; }
        );

    }
  }*/

  map: any;
  constructor() {
  }

  ngOnInit(): void {
    this.WeatherData = {
      main : {},
      isDay: true
    };
    this.getWeatherData();
    console.log(this.WeatherData);

  }
  /*savePartner(){
    this.partnerService.addUniversity(this.partner).subscribe(
      data => {
        console.log('response', data);

      }
    );
  }*/


  // map api


  public ngAfterViewInit(): void {
    this.loadMap();
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

  private loadMap(): void {
    this.map = tt.map({
      key: environment.tomtom.key,
      container: 'map',
    });

    this.map.addControl(new tt.FullscreenControl());
    this.map.addControl(new tt.NavigationControl());

    this.getCurrentPosition()
      .subscribe((position: any) => {
        this.map.flyTo({
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
        }).addTo(this.map);
        marker.setPopup(popup).togglePopup();
      });
  }


  // Weather Api

  WeatherData:any;


  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Tunisia&appid="key"')
      .then(response=>response.json())
      .then(data=>{this.setWeatherData(data);})

     //let data = JSON.parse('{"coord":{"lon":72.85,"lat":19.01},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":297.15,"feels_like":297.4,"temp_min":297.15,"temp_max":297.15,"pressure":1013,"humidity":69},"visibility":3500,"wind":{"speed":3.6,"deg":300},"clouds":{"all":20},"dt":1580141589,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1580089441,"sunset":1580129884},"timezone":19800,"id":1275339,"name":"Mumbai","cod":200}');
     //this.setWeatherData(data);
  }

  setWeatherData(data: any){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }







}
