import { Component, input } from '@angular/core';
import { ServiceCard } from './landing.models';

@Component({
  selector: 'app-landing-services',
  standalone: true,
  templateUrl: './landing-services.component.html'
})
export class LandingServicesComponent {
  readonly serviceCards = input.required<ServiceCard[]>();
}
