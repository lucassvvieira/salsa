import { Component, OnInit } from '@angular/core';

export interface DonatorElement {
  id: number;
  firstName: string;
  lastName: string;
  mothersName: string;
  city: string;
  bloodType: string;
  bloodFactor: string;
  aptitude: boolean;
}

const ELEMENT_DATA: DonatorElement[] = [
  {id: 1, firstName: 'João',  lastName: 'da Silva', mothersName: 'Maria da Silva',
      city: 'São Mateus', bloodType: 'A', bloodFactor: '+', aptitude: true},
  {id: 2, firstName: 'Joana',  lastName: 'dos Santos', mothersName: 'Marta dos Santos',
      city: 'São Mateus', bloodType: 'A', bloodFactor: '+', aptitude: false}
];

@Component({
  selector: 'app-donator-list',
  templateUrl: './donator-list.component.html',
  styleUrls: ['./donator-list.component.scss']
})
export class DonatorListComponent implements OnInit {
  displayedColumns: string[] = [
      'id', 'firstName', 'lastName',
      'mothersName', 'city', 'bloodType',
      'bloodFactor', 'aptitude', 'edit', 'delete'
    ];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
