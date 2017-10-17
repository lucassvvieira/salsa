import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Message } from '../models/message';

@Injectable()
export class MessageService {
    // URL to the Web API
    private messagesUrl = 'api/messages';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getMessages(): Promise<Message[]> {
        return this.http.get(this.messagesUrl)
            .toPromise()
            .then(response => response.json().data as Message[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error has occured', error);
        return Promise.reject(error.message || error);
    }

    getMessage(id: number): Promise<Message> {
        const url = `${this.messagesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Message)
            .catch(this.handleError);
    }

    update(message: Message): Promise<Message> {
        const url = `${this.messagesUrl}/${message.id}`;
        return this.http
            .put(url, JSON.stringify(message), { headers: this.headers })
            .toPromise()
            .then(() => message)
            .catch(this.handleError);
    }

    create(title: string, body: string, sendDate: Date, recipients: number): Promise<Message> {
        return this.http
            .post(this.messagesUrl,
            JSON.stringify({title: title, body: body, sendDate: sendDate, recipients: recipients}),
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
}