import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { DonatorService } from '../../services/donator.service';
import { Donator } from '../../models/donator';

@Component({
    selector: 'app-donator-listing',
    templateUrl: './donator-listing.component.html',
})

export class DonatorListComponent implements OnInit {
    donators: Donator[];

    constructor(
        private donatorService: DonatorService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.donatorService.search(params.get('donator.firstName'),
                params.get('donator.lastName'), params.get('donator.mothersName'), params.get('donator.city'),
                params.get('donator.sex'), params.get('donator.bloodType'), params.get('donator.bloodFactor'),
                Boolean(params.get('donator.aptitude')).valueOf())).subscribe(donators => this.donators = donators);
    }

    goBack(): void {
        this.location.back();
    }
}
