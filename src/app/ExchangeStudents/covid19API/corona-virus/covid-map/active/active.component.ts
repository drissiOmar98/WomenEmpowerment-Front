import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {

  view = { title: 'Active Covid Cases', color: '0275d8' }

  constructor() { }

  ngOnInit(): void { }

}
