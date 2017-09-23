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
import { DonatorSearchComponent } from './donator-search.component';
import { DonatorStatisticsComponent } from './donator-statistics.component';
import { ModelFormComponent } from './model-form.component';

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
        path: 'model-form',
        component: ModelFormComponent,
        data: {
          title: 'Cadastro de novo Modelo'
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
