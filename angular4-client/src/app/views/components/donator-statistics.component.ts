import { Component, OnInit } from '@angular/core';

import { DonatorStatistics } from './../../models/donator-statistics';
import { DonatorService } from '../../services/donator.service';

@Component({
  selector: 'app-donator-stats',
  templateUrl: 'donator-statistics.component.html',
  styleUrls: ['./donator-statistics.component.css']
})

export class DonatorStatisticsComponent implements OnInit {
  stats: DonatorStatistics;

  // Sex chart data
  public sexChartLabels: string[] = ['Masculino', 'Feminino'];
  public sexChartData: number[] = [];
  public sexChartType = 'doughnut';
  // Rh chart data
  public rhChartLabels: string[] = ['Positivo', 'Negativo'];
  public rhChartData: number[] = [];
  public rhChartType = 'doughnut';
  // Aptitude chart data
  public aptitudeChartLabels: string[] = ['Aptos a doar', 'Inaptos a doar'];
  public aptitudeChartData: number[] = [];
  public aptitudeChartType = 'pie';
  // Aptitude chart data with sex
  public aptitudeWithSexChartLabels: string[] = ['Mulheres aptas', 'Homens aptos', 'Mulheres inaptas', 'Homens inaptos'];
  public aptitudeWithSexChartData: number[] = [];
  public aptitudeWithSexChartType = 'pie';
  // Blood type chart data
  public bloodChartLabels: string[] = ['A', 'B', 'O', 'AB'];
  public bloodChartData: number[] = [];
  public bloodChartType = 'pie'
  // Blood type with RH chart data
  public bloodChartRhLabels: string[] = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
  public bloodChartRhData: number[] = [];
  public bloodChartRhType = 'pie'

  public colorsForTwo = [
    {
      backgroundColor: [
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 99, 132, 0.5)',
      ]
    }
  ]

  public colorsForFour = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(0, 255, 0, 0.5)',
      ]
    }
  ]

  public colorsForEight = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(0, 255, 0, 0.5)',
        'rgba(255, 98, 131, 0.5)',
        'rgba(102, 102, 153, 0.5)',
        'rgba(0, 51, 0, 0.5)',
        'rgba(255, 153, 0, 0.5)'
      ]
    }
  ]

  constructor(
    private donatorService: DonatorService,
  ) { }

  ngOnInit() {
    this.donatorService.getDonatorStats().subscribe(stats => {
      this.stats = stats;
      this.initialize();
    });
  }

  initialize() {
    // To the sex chart
    this.sexChartData = [this.stats.maleNumber, this.stats.femaleNumber];
    // To the Rh chart
    this.rhChartData = [this.stats.aPlusNumber + this.stats.bPlusNumber + this.stats.oPlusNumber + this.stats.abPlusNumber,
    this.stats.aMinusNumber + this.stats.bMinusNumber + this.stats.oMinusNumber + this.stats.abMinusNumber];
    // To the aptitude chart
    this.aptitudeChartData = [this.stats.aptNumber, this.stats.unaptNumber];
    // To the aptitude with sex chart
    this.aptitudeWithSexChartData = [this.stats.femaleAptNumber, this.stats.maleAptNumber,
    this.stats.femaleUnaptNumber, this.stats.maleUnaptNumber];
    // To the blood type chart
    this.bloodChartData = [this.stats.aPlusNumber + this.stats.aMinusNumber, this.stats.bPlusNumber + this.stats.bMinusNumber,
    this.stats.oPlusNumber + this.stats.oMinusNumber, this.stats.abPlusNumber + this.stats.abMinusNumber];
    // To the blood with Rh chart
    this.bloodChartRhData = [this.stats.aPlusNumber, this.stats.aMinusNumber, this.stats.bPlusNumber, this.stats.bMinusNumber,
    this.stats.oPlusNumber, this.stats.oMinusNumber, this.stats.abPlusNumber, this.stats.abMinusNumber];
  }

  // Events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
