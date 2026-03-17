import { Component, input } from '@angular/core';
import { PlatformStep } from './landing.models';

@Component({
  selector: 'app-landing-flow',
  standalone: true,
  templateUrl: './landing-flow.component.html'
})
export class LandingFlowComponent {
  readonly steps = input.required<PlatformStep[]>();
}
