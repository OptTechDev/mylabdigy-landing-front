import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-landing-hero',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './landing-hero.component.html'
})
export class LandingHeroComponent {}
