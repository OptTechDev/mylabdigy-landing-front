import { Component, input } from '@angular/core';
import { Testimonial } from './landing.models';

@Component({
  selector: 'app-landing-benefits',
  standalone: true,
  templateUrl: './landing-benefits.component.html'
})
export class LandingBenefitsComponent {
  readonly testimonials = input.required<Testimonial[]>();
}
