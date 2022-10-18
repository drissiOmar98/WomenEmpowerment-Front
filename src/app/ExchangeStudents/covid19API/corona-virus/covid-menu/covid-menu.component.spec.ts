import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidMenuComponent } from './covid-menu.component';

describe('CovidMenuComponent', () => {
  let component: CovidMenuComponent;
  let fixture: ComponentFixture<CovidMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
