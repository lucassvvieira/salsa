import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface SentMessage {
  id: number;
  body: string;
  sendingDate: Date;
  recipients: number;
}

const ELEMENT_DATA: SentMessage[] = [
  {id: 1, body: 'Messagem Teste da Campanha A! Messagem Teste da Campanha A!', sendingDate: new Date('2019/12/10'), recipients: 2},
  {id: 2, body: 'Messagem Teste da Campanha B!', sendingDate: new Date('2019/5/1'), recipients: 15},
  {id: 3, body: 'Messagem Teste da Campanha A! Messagem Teste da Campanha A!', sendingDate: new Date('2019/12/10'), recipients: 2},
  {id: 4, body: 'Messagem Teste da Campanha B!', sendingDate: new Date('2019/5/1'), recipients: 15},
  {id: 5, body: 'Messagem Teste da Campanha A! Messagem Teste da Campanha A!', sendingDate: new Date('2019/12/10'), recipients: 2},
  {id: 6, body: 'Messagem Teste da Campanha B!', sendingDate: new Date('2019/5/1'), recipients: 15},
  {id: 7, body: 'Messagem Teste da Campanha A! Messagem Teste da Campanha A!', sendingDate: new Date('2019/12/10'), recipients: 2},
  {id: 8, body: 'Messagem Teste da Campanha B!', sendingDate: new Date('2019/5/1'), recipients: 15},
  {id: 9, body: 'Messagem Teste da Campanha A! Messagem Teste da Campanha A!', sendingDate: new Date('2019/12/10'), recipients: 2},
  {id: 10, body: 'Messagem Teste da Campanha B!', sendingDate: new Date('2019/5/1'), recipients: 15}
];

@Component({
  selector: 'app-message-history',
  templateUrl: './message-history.component.html',
  styleUrls: ['./message-history.component.scss']
})
export class MessageHistoryComponent implements OnInit {
  displayedColumns: string[] = [
    'id', 'body', 'sendingDate', 'recipients'
  ];
  //dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<SentMessage>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
