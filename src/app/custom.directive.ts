import { Directive } from '@angular/core';
import { AbstractService } from './abstract.service';
import { CustomService } from './custom.service';

@Directive({
  selector: '[customService]',
  providers: [
    {
      provide: AbstractService,
      useClass: CustomService,
    },
  ],
})
export class CustomDirective {}
