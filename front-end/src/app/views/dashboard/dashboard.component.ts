import { Component, OnInit } from '@angular/core';

import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // Sex chart data
  public chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'top',
    }
  };

  public sexChartLabels: Label[] = ['Masculino', 'Feminino'];
  public sexChartData: number[] = [100, 152];
  public sexChartType: ChartType = 'doughnut';

  public colorsForTwo = [
    {
      backgroundColor: [
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 99, 132, 0.5)',
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
