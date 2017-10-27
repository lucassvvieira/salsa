import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { DonatorService } from '../../services/donator.service';
import { Donator } from '../../models/donator';

@Component({
  selector: 'app-send-result',
  templateUrl: 'send-result.component.html'
})

export class SendResultComponent implements OnInit {
  page = 1;
  rowSelected: boolean;
  donators: Observable<Donator[]>;
  selectedDonator: Donator;
  public previewModal;

  constructor(
    private donatorService: DonatorService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.donators = this.donatorService.search(params.get('firstName'),
          params.get('lastName'), params.get('mothersName'), params.get('city'),
          params.get('sex'), params.get('bloodType'), params.get('bloodFactor'),
          params.get('aptitude'))
      });

  }

  transAptitude(b: boolean) {
    if (b) {
      return true;
    } else {
      return false;
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
