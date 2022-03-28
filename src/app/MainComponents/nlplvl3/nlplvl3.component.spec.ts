import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nlplvl3Component } from './nlplvl3.component';

describe('Nlplvl3Component', () => {
  let component: Nlplvl3Component;
  let fixture: ComponentFixture<Nlplvl3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nlplvl3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nlplvl3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
