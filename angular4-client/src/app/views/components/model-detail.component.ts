import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'ngx-flash-messages';

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
        private location: Location,
        private flashMessagesService: FlashMessagesService
    ) { }

    ngOnInit(): void {
        this.route.paramMap
            .subscribe((params: ParamMap) => {
                this.message = this.messageService.getMessage(+params.get('id'))
            });
    }

    goBack(): void {
        setTimeout(()=>{ this.location.back() }, 1800);
    }

    showFlash(): void {
        scroll(0, 0);
        this.flashMessagesService.show('Modelo atualizado com sucesso!', {
            classes: ['alert', 'alert-success'], // You can pass as many classes as you need
            timeout: 3000, // Default is 3000
        });
    }
}
