import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidToggleComponent } from './covid-toggle.component';

describe('CovidToggleComponent', () => {
  let component: CovidToggleComponent;
  let fixture: ComponentFixture<CovidToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
