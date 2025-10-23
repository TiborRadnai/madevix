import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalLayout } from './minimal-layout';

describe('MinimalLayout', () => {
  let component: MinimalLayout;
  let fixture: ComponentFixture<MinimalLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinimalLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinimalLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
