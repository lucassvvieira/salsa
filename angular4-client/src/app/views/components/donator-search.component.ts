import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { DonatorService } from '../../services/donator.service';
import { Donator } from '../../models/donator';

@Component({
  templateUrl: 'donator-search.component.html',
  providers: [DonatorService]
})

export class DonatorSearchComponent {
  donator: Donator;

  constructor(
    private donatorService: DonatorService,
    private router: Router,
    private location: Location
  ) { }

  goToListing(): void {
    this.router.navigate(['components/result', this.donator]);
  }

  goBack(): void {
    this.location.back()
  }

  /*
  search(firstName: string, lastName: string, mothersName: string, city: string, sex: string, bloodType: string,
    bloodFactor: string, aptitude: boolean): void {
    this.donatorService.search(firstName, lastName, mothersName, city, sex, bloodType, bloodFactor, aptitude)
    .then(donators => this.donators = donators);
  }
  */
}
