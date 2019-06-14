import { Observable } from 'rxjs/Observable';
import { sanitize } from '../helpers/sanitize.helper';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { environment } from 'environments/environment';

import { Donator } from '../models/donator';
import { DonatorStatistics } from '../models/donator-statistics';

@Injectable()
export class DonatorService {
    // URL to the Web API
    private donatorsUrl = environment.apiURL + 'donators';
    private queryUrl = '/search';
    private statsUrl = '/statistics';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) {}

    getDonator(id: number): Observable<Donator> {
        const url = `${this.donatorsUrl}/${id}`;
        return this.http.get(url, { headers: this.headers })
            .map(response => {
                return response.json() as Donator
            });
    }

    getDonators(): Promise<Donator[]> {
        return this.http.get(this.donatorsUrl)
            .toPromise()
            .then(response => response.json().data as Donator[])
            .catch(this.handleError);
    }

    update(donator: Donator): Promise<Donator> {
        const url = `${this.donatorsUrl}/${donator.id}`;
        return this.http
            .put(url, JSON.stringify(donator), { headers: this.headers })
            .toPromise()
            .then(() => Donator)
            .catch(this.handleError);
    }

    create(firstName: string, lastName: string, fathersName: string, mothersName: string, birthDate: Date, registerDate: Date,
        state: string, city: string, neighborhood: string, street: string, complement: string,
        cep: string, bloodType: string, bloodFactor: string, aptitude: boolean, sex: string, phone: string,
        color: string, profession: string, nacionality: string, civilState: string, rg: string, cpf: string,
        cnh: string): Promise<Donator> {
        return this.http
            .post(this.donatorsUrl,
            JSON.stringify({
                firstName: firstName, lastName: lastName, fathersName: fathersName, mothersName: mothersName,
                birthDate: birthDate, registerDate: registerDate, state: state, city: city,
                neighborhood: neighborhood, street: street, complement: complement, cep: cep, bloodType: bloodType,
                bloodFactor: bloodFactor, aptitude: aptitude, sex: sex, phone: phone, color: color, profession: profession,
                nacionality: nacionality, civilState: civilState, rg: rg, cpf: cpf, cnh: cnh
            }),
            { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Donator)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        console.log('Delete request submitted to the backend!');
        const url = `${this.donatorsUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    search(firstName: string, lastName: string, mothersName: string, city: string, sex: string,
        bloodType: string, bloodFactor: string, aptitude: string): Observable<Donator[]> {

        const params = sanitize({
            firstName,
            lastName,
            mothersName,
            city,
            sex,
            bloodType,
            bloodFactor,
            aptitude
        });

        // console.log('Submitted search request with parameters:');
        // console.log(params);
        return this.http.get(this.donatorsUrl + this.queryUrl, { params })
            .map(response => {
                return response.json() as Donator[]
            });
    }

    getDonatorStats(): Observable<DonatorStatistics> {
        return this.http.get(this.donatorsUrl + this.statsUrl, { headers: this.headers })
            .map(response => {
                return response.json() as DonatorStatistics
            });
    }

    private handleError(error: any): Promise<any> {
        console.error('An error has occured', error);
        return Promise.reject(error.message || error);
    }
}
