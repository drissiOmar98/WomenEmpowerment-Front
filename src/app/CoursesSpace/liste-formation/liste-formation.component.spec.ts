import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFormationComponent } from './liste-formation.component';

describe('ListeFormationComponent', () => {
  let component: ListeFormationComponent;
  let fixture: ComponentFixture<ListeFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
