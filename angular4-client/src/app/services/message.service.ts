import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Message } from '../models/message';
import { SentMessage } from '../models/sent-message';
import { MessageStatistics } from '../models/message-statistics';

@Injectable()
export class MessageService {
    // URL to the Web API
    private messagesUrl = 'api/messages';
    private statsUrl = '/statistics';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getMessages(): Observable<Message[]> {
        return this.http.get(this.messagesUrl, { headers: this.headers })
        .map(response => {
            return response.json() as Message[]
        });
    }

    private handleError(error: any): Promise<any> {
        console.error('An error has occured', error);
        return Promise.reject(error.message || error);
    }

    getMessage(id: number): Observable<Message> {
        const url = `${this.messagesUrl}/${id}`;
        return this.http.get(url, { headers: this.headers })
        .map(response => {
            return response.json() as Message
        });
    }

    update(message: Message): Promise<Message> {
        const url = `${this.messagesUrl}/${message.id}`;
        return this.http
            .put(url, JSON.stringify(message), { headers: this.headers })
            .toPromise()
            .then(() => message)
            .catch(this.handleError);
    }

    create(title: string, body: string): Promise<Message> {
        return this.http
            .post(this.messagesUrl,
            JSON.stringify({ title: title, body: body }),
            { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Message)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.messagesUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    getMessageStats(): Observable<MessageStatistics> {
        return this.http.get(this.messagesUrl + this.statsUrl, { headers: this.headers })
            .map(response => {
                console.log('Service fetched -> ');
                console.log(response.json());
                return response.json() as MessageStatistics
            });
    }
}
