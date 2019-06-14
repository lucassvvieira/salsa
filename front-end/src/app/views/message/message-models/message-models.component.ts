import { Component, OnInit } from '@angular/core';

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
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
