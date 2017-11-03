import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { FlashMessagesService } from 'ngx-flash-messages';

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
    private location: Location,
    private flashMessagesService: FlashMessagesService
  ) { }

  onSubmit() {
    this.submitted = true;
    this.donatorService.create(
      this.donator.firstName, this.donator.lastName, this.donator.fathersName, this.donator.mothersName,
      this.donator.birthDate, this.donator.registerDate, this.donator.state,
      this.donator.city, this.donator.neighborhood, this.donator.street, this.donator.complement,
      this.donator.cep, this.donator.bloodType, this.donator.bloodFactor, this.donator.aptitude, this.donator.sex,
      this.donator.phone, this.donator.color, this.donator.profession, this.donator.nacionality, this.donator.civilState,
      this.donator.rg, this.donator.cpf, this.donator.cnh).then(() => this.greetAndReload());
  }

  newDonator() {
    this.donator = new Donator();
  }

  greetAndReload(): void {
    scroll(0, 0);
    this.flashMessagesService.show('Cadastro realizado com sucesso!', {
        classes: ['alert', 'alert-success'], // You can pass as many classes as you need
        timeout: 3000, // Default is 3000
    });
    setTimeout(()=>{ window.location.reload(); }, 1800);
  }

  goBack(): void {
    this.location.back()
  }

}
