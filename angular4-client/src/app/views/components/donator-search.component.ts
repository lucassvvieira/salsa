import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { DonatorService } from '../../services/donator.service';
import { Donator } from '../../models/donator';

@Component({
  templateUrl: 'donator-search.component.html',
  styleUrls: ['./donator-search.component.css'],
  providers: [DonatorService]
})

export class DonatorSearchComponent {
  donator: Donator;

  constructor(
    private donatorService: DonatorService,
    private router: Router,
    private location: Location,
  ) { this.donator = new Donator(); }

  goToListing(): void {
    this.router.navigate(['components/donator-list', this.donator]);
  }

  goBack(): void {
    this.location.back()
  }

}
