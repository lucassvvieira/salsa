import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ButtonsComponent } from './buttons.component';
import { CardsComponent } from './cards.component';

// Forms Component
import { FormsComponent } from './forms.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { SocialButtonsComponent } from './social-buttons.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalsComponent } from './modals.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabsComponent } from './tabs.component';

// Components Routing
import { ComponentsRoutingModule } from './components-routing.module';

// My own components
import { DonatorFormComponent } from './donator-form.component';
import { DonatorListComponent } from './donator-listing.component';
import { DonatorSearchComponent } from './donator-search.component';
import { DonatorStatisticsComponent } from './donator-statistics.component';
import { DonatorDetailsComponent } from './donator-details.component';
import { ModelFormComponent } from './model-form.component';
import { SendComponent } from './send.component';
import { SendResultComponent } from './send-result.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule,
    ChartsModule,
    NgxPaginationModule
  ],
  declarations: [
    DonatorFormComponent,
    DonatorListComponent,
    DonatorSearchComponent,
    DonatorStatisticsComponent,
    DonatorDetailsComponent,
    ModelFormComponent,
    SendComponent,
    SendResultComponent,
    ButtonsComponent,
    CardsComponent,
    FormsComponent,
    ModalsComponent,
    SocialButtonsComponent,
    SwitchesComponent,
    TablesComponent,
    TabsComponent
  ]
})
export class ComponentsModule { }
