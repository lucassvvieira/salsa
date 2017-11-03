import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { FlashMessagesService } from 'ngx-flash-messages';

import { MessageService } from './../../services/message.service';
import { Message } from './../../models/message';

@Component({
  selector: 'app-model-form',
  templateUrl: 'model-form.component.html'
})

export class ModelFormComponent {
  message: Message;
  submitted: boolean;
  spColor = '#129b3e';

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute,
    private location: Location,
    private flashMessagesService: FlashMessagesService
  ) { this.message = new Message(); this.submitted = false }

  onSubmit() {
    this.submitted = true;
    this.messageService.create(this.message.title, this.message.body)
      .then(() => this.greetAndReload());
  }

  greetAndReload(): void {
    scroll(0, 0);
    this.flashMessagesService.show('Cadastro realizado com sucesso!', {
        classes: ['alert', 'alert-success'], // You can pass as many classes as you need
        timeout: 3000, // Default is 3000
    });
    setTimeout(()=>{ window.location.reload(); }, 1800);
  }

  goBack(): void {
    this.location.back()
  }

  updateText(valor: any): any {
    return valor.replace()
  }

}
