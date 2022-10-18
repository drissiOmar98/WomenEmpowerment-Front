import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmed',
  templateUrl: './confirmed.component.html',
  styleUrls: ['./confirmed.component.css']
})
export class ConfirmedComponent implements OnInit {

  view = { title: 'Total Confirmed Covid Cases', color: '5cb85c' }

  constructor() { }

  ngOnInit(): void { }

}
