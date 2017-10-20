import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Donator } from '../models/donator';

@Injectable()
export class DonatorService {
    // URL to the Web API
    private donatorsUrl = 'api/donators';
    private queryUrl = '/search';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getDonators(): Promise<Donator[]> {
        console.log('Gimme all Donators! YUMMY');
        return this.http.get(this.donatorsUrl)
            .toPromise()
            .then(response => response.json().data as Donator[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error has occured', error);
        return Promise.reject(error.message || error);
    }

    getDonator(id: number): Promise<Donator> {
        console.log('Asking politely for a specific Donator');
        const url = `${this.donatorsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Donator)
            .catch(this.handleError);
    }

    update(donator: Donator): Promise<Donator> {
        console.log('Updating fields of donator number:' + donator.id);
        const url = `${this.donatorsUrl}/${donator.id}`;
        return this.http
            .put(url, JSON.stringify(donator), { headers: this.headers })
            .toPromise()
            .then(() => donator)
            .catch(this.handleError);
    }

    create(firstName: string, lastName: string, fathersName: string, mothersName: string, birthDate: Date, registerDate: Date,
        state: string, city: string, neighborhood: string, street: string, complement: string,
        cep: string, bloodType: string, bloodFactor: string, aptitude: boolean, sex: string, phone: string,
        color: string, profession: string, nacionality: string, civilState: string, rg: string, cpf: string,
        cnh: string): Promise<Donator> {
        console.log('Donators service submitted the create transaction to the backend!');
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
        bloodType: string, bloodFactor: string, aptitude: boolean): Promise<Donator[]> {
        console.log('Submitted search request with parameters:');
        console.log(firstName, lastName, mothersName, city, sex, bloodType, bloodFactor, aptitude);
        return this.http.get(this.donatorsUrl + this.queryUrl + `?firstName=${firstName}` + `?lastName=${lastName}` +
            `?mothersName=${mothersName}` + `?city=${city}` + `?sex=${sex}` + `?bloodType=${bloodType}` +
            `?bloodFactor=${bloodFactor}` + `?aptitude=${aptitude}`).toPromise().then(response => response.json().data as Donator[])
            .catch(this.handleError);
    }
}
