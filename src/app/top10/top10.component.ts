import { Component, OnInit } from '@angular/core';
import { Text } from '../text';

@Component({
  selector: 'app-top10',
  imports: [],
  templateUrl: './top10.component.html',
  styleUrl: './top10.component.css'
})
export class Top10Component {
  constructor() {}
  variabletest:Text={value:""};
  ngOnInit() {
    this.variabletest.value = "Hello World!";
  }
  }
