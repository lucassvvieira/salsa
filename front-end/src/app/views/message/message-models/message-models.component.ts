import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface DonatorElement {
  id: number;
  title: string;
  content: string;
}

const ELEMENT_DATA: DonatorElement[] = [
  {id: 1, title: 'Campanha A', content: 'Messagem Teste da Campanha A!'},
  {id: 2, title: 'Campanha B', content: 'Messagem Teste da Campanha B!'},
];

@Component({
  selector: 'app-message-models',
  templateUrl: './message-models.component.html',
  styleUrls: ['./message-models.component.scss']
})
export class MessageModelsComponent implements OnInit {
  displayedColumns: string[] = [
    'id', 'title', 'content', 'edit', 'delete'
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
