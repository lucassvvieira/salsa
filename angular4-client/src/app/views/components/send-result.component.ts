import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { DonatorService } from '../../services/donator.service';
import { Donator } from '../../models/donator';
import { Message } from './../../models/message';
import { MessageService } from './../../services/message.service';

@Component({
  selector: 'app-send-result',
  templateUrl: 'send-result.component.html'
})

export class SendResultComponent implements OnInit {
  page = 1;
  textContent: any;
  messageId: number;
  sendingParams: string[];
  modalText: string;
  rowSelected: boolean;
  messages: Message[];
  tokenDonator: Donator;
  donators: Observable<Donator[]>;
  selectedDonator: Donator;
  public previewModal;

  constructor(
    private donatorService: DonatorService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.tokenDonator = new Donator;
    this.sendingParams = new Array<string>();
    this.messageId = 0;
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.donators = this.donatorService.search(params.get('firstName'),
          params.get('lastName'), params.get('mothersName'), params.get('city'),
          params.get('sex'), params.get('bloodType'), params.get('bloodFactor'),
          params.get('aptitude'));

        this.sendingParams.push(params.get('firstName'), params.get('lastName'),
          params.get('mothersName'), params.get('city'),
          params.get('sex'), params.get('bloodType'), params.get('bloodFactor'),
          params.get('aptitude'));
      });

    this.messageService.getMessages().subscribe(messages => {
      this.messages = messages;
    })

  }

  transAptitude(b: boolean) {
    if (b) {
      return true;
    } else {
      return false;
    }
  }

  updateText(content: Event) {
    this.textContent = content;
    this.modalText = content.toString();

    this.donators.subscribe(d => {
      this.tokenDonator.firstName = d[0].firstName;
      this.tokenDonator.lastName = d[0].lastName;
      this.tokenDonator.city = d[0].city;
      this.tokenDonator.bloodFactor = d[0].bloodFactor;
      this.tokenDonator.bloodType = d[0].bloodType;
    });
  }

  updateModelId(id: number) {
    console.log('Selected model with id -> ' + id);
  }

  send() {
    this.sendingParams.push(this.textContent);
    // I'm sorry
    this.messageService.send(this.sendingParams[0], this.sendingParams[1], this.sendingParams[2],
      this.sendingParams[3], this.sendingParams[4], this.sendingParams[5], this.sendingParams[6],
      this.sendingParams[7], this.sendingParams[8]);
  }

  applyTags() {
    const name = /@nome/gi;
    const city = /@cidade/gi;
    const bloodFactor = /@fator/gi;
    const bloodType = /@tipo/gi;

    if (this.tokenDonator.firstName !== undefined) {
      this.modalText = this.modalText.replace(name, this.tokenDonator.firstName);
      this.modalText = this.modalText.replace(city, this.tokenDonator.city);
      this.modalText = this.modalText.replace(bloodFactor, this.tokenDonator.bloodFactor);
      this.modalText = this.modalText.replace(bloodType, this.tokenDonator.bloodType);
    }
  }

  onSelect(donator: Donator): void {
    if (donator != null) {
      this.selectedDonator = donator;
      this.rowSelected = true;
    } else {
      this.clearSelection();
    }
  }

  clearSelection(): void {
    this.selectedDonator = null;
    this.rowSelected = false;
  }

  goBack(): void {
    this.location.back();
  }
}
