import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  events: string[] = [];
  opened = false;

  sidenavMode = 'side';
  sidenavFix = false;

  data: any[] = [
    {
      'name': 'Homens',
      'value': 100
    },
    {
      'name': 'Mulheres',
      'value': 152
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
