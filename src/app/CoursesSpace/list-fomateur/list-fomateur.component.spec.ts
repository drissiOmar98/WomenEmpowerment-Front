import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFomateurComponent } from './list-fomateur.component';

describe('ListFomateurComponent', () => {
  let component: ListFomateurComponent;
  let fixture: ComponentFixture<ListFomateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFomateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFomateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
