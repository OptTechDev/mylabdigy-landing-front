import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexionConfigDialog } from './conexion-config-dialog';

describe('ConexionConfigDialog', () => {
  let component: ConexionConfigDialog;
  let fixture: ComponentFixture<ConexionConfigDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConexionConfigDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConexionConfigDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
