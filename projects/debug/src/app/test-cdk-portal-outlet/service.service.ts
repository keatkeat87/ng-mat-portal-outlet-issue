import { Injectable } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { DynamicComponent } from './dynamic/dynamic.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  portal: ComponentPortal<DynamicComponent>;
}
