import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatUniversityComponent } from './stat-university.component';

describe('StatUniversityComponent', () => {
  let component: StatUniversityComponent;
  let fixture: ComponentFixture<StatUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatUniversityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
