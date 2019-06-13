import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { FlashMessagesService } from 'ngx-flash-messages';
import 'rxjs/add/operator/switchMap';

import { DonatorService } from '../../services/donator.service';
import { Donator } from './../../models/donator';

@Component({
    selector: 'app-donator-details',
    templateUrl: './donator-details.component.html',
    styleUrls: ['./donator-details.component.css']
})

export class DonatorDetailsComponent implements OnInit {
    donator: Observable<Donator>;

    constructor(
        private donatorService: DonatorService,
        private route: ActivatedRoute,
        private location: Location,
        private flashMessagesService: FlashMessagesService
    ) { }

    ngOnInit(): void {
        this.route.paramMap
            .subscribe((params: ParamMap) => {
                this.donator = this.donatorService.getDonator(+params.get('id'))
            });
    }

    goBack(): void {
        setTimeout(()=>{ this.location.back() }, 1800);
    }

    goBackRightNow(): void {
        this.location.back();
    }

    showFlash(): void {
        scroll(0, 0);
        this.flashMessagesService.show('Dados atualizados com sucesso!', {
            classes: ['alert', 'alert-success'], // You can pass as many classes as you need
            timeout: 3000, // Default is 3000
        });
    }
}
