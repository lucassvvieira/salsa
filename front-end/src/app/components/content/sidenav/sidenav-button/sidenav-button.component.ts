import { Component, OnInit, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidenav-button',
  templateUrl: './sidenav-button.component.html',
  styleUrls: ['./sidenav-button.component.scss']
})
export class SidenavButtonComponent implements OnInit {

  @Input() icon: string;
  @Input() name: string;
  @Input() link: RouterLink;

  constructor() { }

  ngOnInit() {
  }

}
