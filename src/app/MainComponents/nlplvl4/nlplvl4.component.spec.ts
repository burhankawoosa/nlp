import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nlplvl4Component } from './nlplvl4.component';

describe('Nlplvl4Component', () => {
  let component: Nlplvl4Component;
  let fixture: ComponentFixture<Nlplvl4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nlplvl4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nlplvl4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
