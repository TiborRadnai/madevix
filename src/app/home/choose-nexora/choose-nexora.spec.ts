import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseNexora } from './choose-nexora';

describe('ChooseNexora', () => {
  let component: ChooseNexora;
  let fixture: ComponentFixture<ChooseNexora>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseNexora]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseNexora);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
