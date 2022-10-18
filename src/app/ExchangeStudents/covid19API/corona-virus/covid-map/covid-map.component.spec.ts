import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidMapComponent } from './covid-map.component';

describe('CovidMapComponent', () => {
  let component: CovidMapComponent;
  let fixture: ComponentFixture<CovidMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
