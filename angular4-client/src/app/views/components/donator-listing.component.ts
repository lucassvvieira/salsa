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
    donators: Donator[];
    selectedDonator: Donator;
    searchData: any;

    constructor(
        private donatorService: DonatorService,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location
    ) { }

    ngOnInit(): void {
        console.log('Trying to perform search with object: ');
        this.searchData = this.route.params.subscribe(params => this.donatorService.search(params.firstName, params.lastName,
            params.mothersName, params.city, params.sex, params.bloodType, params.bloodFactor, params.aptitude));

        this.donators = this.searchData;
        /*
        this.route.paramMap
            .switchMap((params: ParamMap) => this.donatorService.search(params.get('donator.firstName'),
                params.get('donator.lastName'), params.get('donator.mothersName'), params.get('donator.city'),
                params.get('donator.sex'), params.get('donator.bloodType'), params.get('donator.bloodFactor'),
                Boolean(params.get('donator.aptitude')).valueOf())).subscribe(donators => this.donators = donators);
        */
        console.log('Search done with resulting object: ' + this.donators);
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
                this.donators = this.donators.filter(d => d !== donator);
            });
    }
}
