import { Component } from '@angular/core';

@Component({
  templateUrl: 'donator-statistics.component.html'
})

export class DonatorStatisticsComponent {
  // Doughnut
  public doughnutChartLabels: string[] = ['Masculino', 'Feminino', 'Não informado'];
  public doughnutChartData: number[] = [1150, 950, 100];
  public doughnutChartType = 'doughnut';

  // Doughnut 2
  public doughnut2ChartLabels: string[] = ['Positivo', 'Negativo'];
  public doughnut2ChartData: number[] = [1450, 750];
  public doughnut2ChartType = 'doughnut';

  // Pie
  public pieChartLabels: string[] = ['Aptos a doar', 'Inaptos a doar'];
  public pieChartData: number[] = [1700, 500];
  public pieChartType = 'pie';

  // Pie 2
  public pie2ChartLabels: string[] = ['A', 'B', 'AB', 'O'];
  public pie2ChartData: number[] = [900, 600, 500, 200];
  public pie2ChartType = 'pie'

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
