import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsComponent } from './buttons.component';
import { CardsComponent } from './cards.component';
import { FormsComponent } from './forms.component';
import { ModalsComponent } from './modals.component';
import { SocialButtonsComponent } from './social-buttons.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';
import { TabsComponent } from './tabs.component';

// My own imports
import { DonatorFormComponent } from './donator-form.component';
import { DonatorListComponent } from './donator-listing.component';
import { DonatorSearchComponent } from './donator-search.component';
import { DonatorStatisticsComponent } from './donator-statistics.component';
import { DonatorDetailsComponent } from './donator-details.component';
import { ModelFormComponent } from './model-form.component';
import { ModelListingComponent } from './model-listing.component';
import { SendComponent } from './send.component';
import { SendResultComponent } from './send-result.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Salsa'
    },
    children: [
      {
        path: 'donator-form',
        component: DonatorFormComponent,
        data: {
          title: 'Formulário de Doador'
        }
      },
      {
        path: 'donator-search',
        component: DonatorSearchComponent,
        data: {
          title: 'Busca de Doador'
        }
      },
      {
        path: 'donator-statistics',
        component: DonatorStatisticsComponent,
        data: {
          title: 'Estatísticas dos Doadores'
        }
      },
      {
        path: 'donator-list',
        component: DonatorListComponent,
        data: {
          title: 'Lista de Doadores'
        }
      },
      {
        path: 'donator-detail/:id',
        component: DonatorDetailsComponent,
        data: {
          title: 'Detalhes do Doador'
        }
      },
      {
        path: 'model-form',
        component: ModelFormComponent,
        data: {
          title: 'Cadastro de novo Modelo'
        }
      },
      {
        path: 'model-list',
        component: ModelListingComponent,
        data: {
          title: 'Cadastro de novo Modelo'
        }
      },
      {
        path: 'send',
        component: SendComponent,
        data: {
          title: 'Envio de mensagens'
        }
      },
      {
        path: 'send-result',
        component: SendResultComponent,
        data: {
          title: 'Resultado do filtro de doadores'
        }
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
        data: {
          title: 'Buttons'
        }
      },
      {
        path: 'cards',
        component: CardsComponent,
        data: {
          title: 'Cards'
        }
      },
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Forms'
        }
      },
      {
        path: 'modals',
        component: ModalsComponent,
        data: {
          title: 'Modals'
        }
      },
      {
        path: 'social-buttons',
        component: SocialButtonsComponent,
        data: {
          title: 'Social buttons'
        }
      },
      {
        path: 'switches',
        component: SwitchesComponent,
        data: {
          title: 'Switches'
        }
      },
      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Tables'
        }
      },
      {
        path: 'tabs',
        component: TabsComponent,
        data: {
          title: 'Tabs'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
