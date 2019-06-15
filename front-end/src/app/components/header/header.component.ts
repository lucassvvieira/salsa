import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private themer: ThemeService) {}

  setLightTheme(): void {
    this.themer.setLightTheme();
  }

  setDarkTheme(): void {
    this.themer.setDarkTheme();
  }

  ngOnInit() {
  }

}
