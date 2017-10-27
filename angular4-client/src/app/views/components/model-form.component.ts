import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

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
    private location: Location
  ) { this.message = new Message(); this.submitted = false }

  onSubmit() {
    this.submitted = true;
    this.messageService.create(this.message.title, this.message.body)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back()
  }

  updateText(valor: any): any {
    return valor.replace()
  }

}
