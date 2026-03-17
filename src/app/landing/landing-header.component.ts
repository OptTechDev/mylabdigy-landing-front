import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-landing-header',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './landing-header.component.html'
})
export class LandingHeaderComponent {
  readonly navItems = input.required<string[]>();
}
