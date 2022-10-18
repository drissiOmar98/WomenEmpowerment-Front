import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfUniveritiesfrontComponent } from './list-of-univeritiesfront.component';

describe('ListOfUniveritiesfrontComponent', () => {
  let component: ListOfUniveritiesfrontComponent;
  let fixture: ComponentFixture<ListOfUniveritiesfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfUniveritiesfrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfUniveritiesfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
