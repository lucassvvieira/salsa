import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { DonatorService } from '../../services/donator.service';
import { Donator } from './../../models/donator';

@Component({
    selector: 'app-donator-details',
    templateUrl: './donator-details.component.html',
})

export class DonatorDetailsComponent implements OnInit {
    donator: Observable<Donator>;

    constructor(
        private donatorService: DonatorService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.paramMap
        .subscribe((params: ParamMap) => {
            this.donator = this.donatorService.getDonator(+params.get('id'))
        });
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
         // this.donatorService.update(this.donator as Donator);
         // this.location.back();
    }
}
