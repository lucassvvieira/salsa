import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { DonatorService } from '../../services/donator.service';
import { Donator } from './../../models/donator';

@Component({
  selector: 'app-donator-form',
  templateUrl: 'donator-form.component.html'
})

export class DonatorFormComponent {
  donator = new Donator();
  submitted = false;

  constructor(
    private donatorService: DonatorService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  onSubmit() {
    this.submitted = true;
    console.log('Button submitted the form register action!');
    this.donatorService.create(
      this.donator.firstName, this.donator.lastName, this.donator.fathersName, this.donator.mothersName,
      this.donator.birthDate, this.donator.registerDate, this.donator.state,
      this.donator.city, this.donator.neighborhood, this.donator.street, this.donator.complement,
      this.donator.cep, this.donator.bloodType, this.donator.bloodFactor, this.donator.aptitude, this.donator.sex,
      this.donator.phone, this.donator.color, this.donator.profession, this.donator.nacionality, this.donator.civilState,
      this.donator.rg, this.donator.cpf, this.donator.cnh).then(() => this.goBack());
  }

  newDonator() {
    this.donator = new Donator();
  }

  goBack(): void {
    this.location.back()
  }

}
