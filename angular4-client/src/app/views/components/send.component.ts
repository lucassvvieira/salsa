import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { DonatorService } from '../../services/donator.service';
import { Donator } from '../../models/donator';

@Component({
  selector: 'app-send',
  templateUrl: 'send.component.html',
  styleUrls: ['./send.component.css']
})

export class SendComponent {
  donator: Donator;

  constructor(
    private donatorService: DonatorService,
    private router: Router,
    private location: Location,
  ) { this.donator = new Donator(); }

  goToResult(): void {
    this.router.navigate(['components/send-result', this.donator]);
  }

  goBack(): void {
    this.location.back()
  }

}
