import { Component, OnInit } from '@angular/core';
import { Value } from '../value';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {

  temperature: Value = {
    id: 1,
    name: 'Temperatur'
  };

  humidity: Value = {
    id: 2,
    name: 'Luftfeuchtigkeit'
  };

  brightness: Value = {
    id: 3,
    name: 'Helligkeit'
  };

  constructor() { }

  ngOnInit() {
  }

}