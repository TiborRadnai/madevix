import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Introducion } from './introducion';

describe('Introducion', () => {
  let component: Introducion;
  let fixture: ComponentFixture<Introducion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Introducion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Introducion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
