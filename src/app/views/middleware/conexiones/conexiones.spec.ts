import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conexiones } from './conexiones';

describe('Conexiones', () => {
  let component: Conexiones;
  let fixture: ComponentFixture<Conexiones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conexiones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conexiones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
