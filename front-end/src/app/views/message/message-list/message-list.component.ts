import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

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
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  displayedColumns: string[] = [
    'id', 'firstName', 'lastName',
    'mothersName', 'aptitude'
  ];
  //dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<DonatorElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
