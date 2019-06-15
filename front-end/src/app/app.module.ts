// Angular Imports
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Layout Imports
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';

// Chats Import
import { ChartsModule } from 'ng2-charts';

// Services
import { ThemeService } from './services/theme.service';

// Application Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { SidenavComponent } from './components/content/sidenav/sidenav.component';
import { SidenavButtonComponent } from './components/content/sidenav/sidenav-button/sidenav-button.component';
import { BreadcrumbsComponent } from './components/content/breadcrumbs/breadcrumbs.component';

import { DashboardComponent } from './views/dashboard/dashboard.component';

import { DonatorModule } from './donator.module';
import { MessageModule } from './message.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    BreadcrumbsComponent,
    SidenavComponent,
    SidenavButtonComponent,
    DashboardComponent,
    ...DonatorModule,
    ...MessageModule
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    ChartsModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
