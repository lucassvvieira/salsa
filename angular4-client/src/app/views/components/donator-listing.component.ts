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
    styleUrls: ['./donator-listing.component.css']
})

export class DonatorListComponent implements OnInit {
    page = 1;
    rowSelected: boolean;
    donators: Observable<Donator[]>;
    selectedDonator: Donator;

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

    isRowSelected() {
        if (this.rowSelected) {
            return true;
        } else {
            return false;
        }
    }

    willButtonBeShown(donator: Donator): boolean {
        if (this.rowSelected && donator === this.selectedDonator) {
            return false;
        } else {
            return true;
        }
    }

    transAptitude(b: boolean) {
        if (b) {
            return true;
        } else {
            return false;
        }
    }

    gotoDetail(): void {
        this.router.navigate(['components/donator-detail', this.selectedDonator.id]);
    }

    goBack(): void {
        this.location.back();
    }

    delete(donator: Donator): void {
        if (confirm('Você tem certeza que quer excluir esse registro?')) {
            this.donatorService.delete(donator.id)
                .then(() => {
                    this.donators = this.donators
                        .map(donators => donators.filter(d => d !== donator));
                });
        }
    }
}
