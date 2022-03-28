import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nlplvl2Component } from './nlplvl2.component';

describe('Nlplvl2Component', () => {
  let component: Nlplvl2Component;
  let fixture: ComponentFixture<Nlplvl2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nlplvl2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nlplvl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
