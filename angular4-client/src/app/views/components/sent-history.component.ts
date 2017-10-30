import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { SentMessage } from './../../models/sent-message';
import { MessageService } from './../../services/message.service';

@Component({
    selector: 'app-sent-history',
    templateUrl: './sent-history.component.html',
    styleUrls: ['./sent-history.component.css']
})

export class SentHistoryComponent implements OnInit {
    page = 1;
    rowSelected: boolean;
    sentMessages: SentMessage[];
    selectedMessage: SentMessage;

    constructor(
        private messageService: MessageService,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location
    ) { }

    ngOnInit() {
        this.messageService.getSentMessages().subscribe(messages => {
            this.sentMessages = messages;
            console.log(messages);
        })
        this.rowSelected = false;
    }


    onSelect(message: SentMessage): void {
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

    goBack(): void {
        this.location.back();
    }
}
