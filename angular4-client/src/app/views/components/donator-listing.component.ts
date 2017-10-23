import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import 'rxjs/add/operator/switchMap';

import { DonatorService } from '../../services/donator.service';
import { Donator } from '../../models/donator';

@Component({
    selector: 'app-donator-listing',
    templateUrl: './donator-listing.component.html',
})

export class DonatorListComponent implements OnInit {
    page = 1;
    rowSelected: boolean;
    donators: Observable<Donator[]>;
    selectedDonator: Donator;
    searchData: any;

    constructor(
        private donatorService: DonatorService,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location
    ) { }

    ngOnInit() {
        console.log('Trying to perform search with object: ');
        this.route.paramMap
            .subscribe((params: ParamMap) => {
                this.donators = this.donatorService.search(params.get('firstName'),
                    params.get('lastName'), params.get('mothersName'), params.get('city'),
                    params.get('sex'), params.get('bloodType'), params.get('bloodFactor'),
                    params.get('aptitude'))
            });

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

    gotoDetail(): void {
        this.router.navigate(['donators/detail', this.selectedDonator.id]);
    }

    goBack(): void {
        this.location.back();
    }

    delete(donator: Donator): void {
        this.donatorService.delete(donator.id)
            .then(() => {
                // this.donators = this.donators.filter(d => d !== donator);
            });
    }
}
