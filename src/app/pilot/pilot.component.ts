import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.css']
})
export class PilotComponent implements OnInit {

 
  ngOnInit() {
  }

  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      'fixed': false,
      'top': 0,
      'bottom': 0,
    });
  }

  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));




}
