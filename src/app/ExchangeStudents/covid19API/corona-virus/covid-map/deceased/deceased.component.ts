import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deceased',
  templateUrl: './deceased.component.html',
  styleUrls: ['./deceased.component.css']
})
export class DeceasedComponent implements OnInit {

  view = { title: 'Total Deceased Covid Cases', color: 'f0ad4e' }

  constructor() { }

  ngOnInit(): void { }

}
