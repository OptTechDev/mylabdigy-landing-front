import { Component, input } from '@angular/core';
import { ServiceCard } from '../../landing/landing.models';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  readonly serviceCards = input.required<ServiceCard[]>();
}
