import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ComparisonRow, PricingPlan } from './landing.models';

@Component({
  selector: 'app-landing-pricing',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './landing-pricing.component.html'
})
export class LandingPricingComponent {
  readonly pricingPlans = input.required<PricingPlan[]>();
  readonly comparisonRows = input.required<ComparisonRow[]>();
}
