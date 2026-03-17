import { Component, input } from '@angular/core';
import { PlatformStep } from '../../landing/landing.models';

@Component({
  selector: 'app-flow',
  imports: [],
  templateUrl: './flow.html',
  styleUrl: './flow.css',
})
export class Flow {
  readonly steps = input.required<PlatformStep[]>();
}
