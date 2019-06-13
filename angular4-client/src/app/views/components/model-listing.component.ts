import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'ngx-flash-messages';

import { Message } from './../../models/message';
import { MessageService } from './../../services/message.service';

@Component({
    selector: 'app-model-listing',
    templateUrl: './model-listing.component.html',
    styleUrls: ['./model-listing.component.css']
})

export class ModelListingComponent implements OnInit {
    page = 1;
    rowSelected: boolean;
    messages: Message[];
    selectedMessage: Message;

    constructor(
        private messageService: MessageService,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location,
        private flashMessagesService: FlashMessagesService
    ) { }

    ngOnInit() {
        this.messageService.getMessages().subscribe(messages => {
            this.messages = messages;
        })
        this.rowSelected = false;
    }


    onSelect(message: Message): void {
        if (message != null) {
            this.selectedMessage = message;
            this.rowSelected = true;
        } else {
            this.clearSelection();
        }
    }

    clearSelection(): void {
        this.selectedMessage = null;
        this.rowSelected = false;
    }

    isRowSelected() {
        if (this.rowSelected) {
            return true;
        } else {
            return false;
        }
    }

    willButtonBeShown(message: Message): boolean {
        if (this.rowSelected && message === this.selectedMessage) {
            return false;
        } else {
            return true;
        }
    }

    gotoDetail(): void {
        this.router.navigate(['components/model-detail', this.selectedMessage.id]);
    }

    goBack(): void {
        this.location.back();
    }

    delete(message: Message): void {
        if (confirm('Você tem certeza que quer excluir esse registro?')) {
            this.messageService.delete(message.id)
                .then(() => {
                    this.messages = this.messages.filter(m => m !== message);
                });
        }
    }

    showFlash(): void {
        scroll(0, 0);
        this.flashMessagesService.show('Modelo removido com sucesso!', {
            classes: ['alert', 'alert-danger'], // You can pass as many classes as you need
            timeout: 3000, // Default is 3000
        });
    }
}
