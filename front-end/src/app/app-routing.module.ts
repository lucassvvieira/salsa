import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './views/dashboard/dashboard.component';

import { DonatorSearchComponent } from './views/donator/donator-search/donator-search.component';
import { DonatorFormComponent } from './views/donator/donator-form/donator-form.component';
import { DonatorListComponent } from './views/donator/donator-list/donator-list.component';

import { MessageSendComponent } from './views/message/message-send/message-send.component';
import { MessageHistoryComponent } from './views/message/message-history/message-history.component';
import { MessageModelsComponent } from './views/message/message-models/message-models.component';
import { MessageModelFormComponent } from './views/message/message-model-form/message-model-form.component';
import { MessageListComponent } from './views/message/message-list/message-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent,
      data: { title: 'Dashboard' }
  },
  { path: 'donator',
      data: { title: 'Doador' },
      children: [
        { path: '', redirectTo: 'search', pathMatch: 'full' },
        { path: 'search', component: DonatorSearchComponent,
            data: { title: 'Busca de Doador' }
        },
        { path: 'form', component: DonatorFormComponent,
            data: { title: 'Formulário de Cadastro de Doador' }
        },
        { path: 'list', component: DonatorListComponent,
            data: { title: 'Lista' }
        },
      ]
  },
  { path: 'message',
      data: { title: 'Menssagem' },
      children: [
        { path: '', redirectTo: 'send', pathMatch: 'full' },
        { path: 'send', component: MessageSendComponent,
            data: { title: 'Envio de Menssagem' }
        },
        { path: 'history', component: MessageHistoryComponent,
            data: { title: 'Histórico de Envios de Mensagens' }
        },
        { path: 'models', component: MessageModelsComponent,
            data: { title: 'Lista de Modelos de Menssagens' }
        },
        { path: 'model-form', component: MessageModelFormComponent,
            data: { title: 'Cadastro de novo Modelo de Menssagem' }
        },
        { path: 'list', component: MessageListComponent,
            data: { title: 'Resultado do filtro de Doadores' }
        },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
