import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recovered',
  templateUrl: './recovered.component.html',
  styleUrls: ['./recovered.component.css']
})
export class RecoveredComponent implements OnInit {

  view = { title: 'Total Recovered Covid Cases', color: '5bc0de' }

  constructor() { }

  ngOnInit(): void { }

}
