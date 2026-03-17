import { Component, input } from '@angular/core';
import { PricingPlan, ComparisonRow } from '../../landing/landing.models';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-pricing',
  imports: [ButtonModule],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
})
export class Pricing {
  readonly pricingPlans = input.required<PricingPlan[]>();
  readonly comparisonRows = input.required<ComparisonRow[]>();
}
