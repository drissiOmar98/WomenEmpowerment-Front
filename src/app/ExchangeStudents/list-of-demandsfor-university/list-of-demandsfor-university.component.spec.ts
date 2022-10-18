import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfDemandsforUniversityComponent } from './list-of-demandsfor-university.component';

describe('ListOfDemandsforUniversityComponent', () => {
  let component: ListOfDemandsforUniversityComponent;
  let fixture: ComponentFixture<ListOfDemandsforUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfDemandsforUniversityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfDemandsforUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
