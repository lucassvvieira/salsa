import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

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
import { DonatorSearchComponent } from './donator-search.component';
import { DonatorStatisticsComponent } from './donator-statistics.component';
import { ModelFormComponent } from './model-form.component';

@NgModule({
  imports: [
    ComponentsRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule,
    ChartsModule
  ],
  declarations: [
    DonatorFormComponent,
    DonatorSearchComponent,
    DonatorStatisticsComponent,
    ModelFormComponent,
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
