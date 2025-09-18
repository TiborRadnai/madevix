import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeWebsite } from './make-website';

describe('MakeWebsite', () => {
  let component: MakeWebsite;
  let fixture: ComponentFixture<MakeWebsite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeWebsite]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeWebsite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
