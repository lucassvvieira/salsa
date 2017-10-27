import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { MessageService } from './../../services/message.service';
import { Message } from './../../models/message';

@Component({
    selector: 'app-model-detail',
    templateUrl: './model-detail.component.html'
})

export class ModelDetailComponent implements OnInit {
    message: Observable<Message>;

    constructor(
        private messageService: MessageService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.paramMap
            .subscribe((params: ParamMap) => {
                this.message = this.messageService.getMessage(+params.get('id'))
            });
    }

    goBack(): void {
        this.location.back();
    }
}
