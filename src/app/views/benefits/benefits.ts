import { Component, input } from '@angular/core';
import { Testimonial } from '../../landing/landing.models';

@Component({
  selector: 'app-benefits',
  imports: [],
  templateUrl: './benefits.html',
  styleUrl: './benefits.css',
})
export class Benefits {
  readonly testimonials = input.required<Testimonial[]>();
}
