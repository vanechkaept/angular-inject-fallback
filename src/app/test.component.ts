import { Component, inject, InjectFlags } from '@angular/core';
import { AbstractService } from './abstract.service';
import { DefaultService } from './default.service';

@Component({
  selector: 'test',
  template: '{{ message }}',
  providers: [DefaultService],
})
export class TestComponent {
  private readonly service =
    inject(AbstractService, InjectFlags.Optional) ?? inject(DefaultService);

  get message(): string {
    return this.service.message;
  }
}
