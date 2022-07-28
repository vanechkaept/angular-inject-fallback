import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';

@Injectable()
export class CustomService extends AbstractService {
  message = `I'm CUSTOM service`;

  constructor() {
    super();
    console.log('CUSTOM service instantiated');
  }
}
