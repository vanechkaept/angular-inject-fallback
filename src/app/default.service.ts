import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';

@Injectable()
export class DefaultService extends AbstractService {
  message = `I'm DEFAULT service`;

  constructor() {
    super();
    console.log('DEFAULT service instantiated');
  }
}
