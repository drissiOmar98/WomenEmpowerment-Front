import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeceasedComponent } from './deceased.component';

describe('DeceasedComponent', () => {
  let component: DeceasedComponent;
  let fixture: ComponentFixture<DeceasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeceasedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeceasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
