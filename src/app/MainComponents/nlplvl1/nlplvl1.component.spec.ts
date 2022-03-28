import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nlplvl1Component } from './nlplvl1.component';

describe('Nlplvl1Component', () => {
  let component: Nlplvl1Component;
  let fixture: ComponentFixture<Nlplvl1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nlplvl1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nlplvl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
