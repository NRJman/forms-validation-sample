import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
  encapsulation: ViewEncapsulation.None // Keep calm. I'm aware that it is a bad practice :)
})
export class EntryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
