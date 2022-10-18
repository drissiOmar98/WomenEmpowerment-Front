import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFomateurComponent } from './add-fomateur.component';

describe('AddFomateurComponent', () => {
  let component: AddFomateurComponent;
  let fixture: ComponentFixture<AddFomateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFomateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFomateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
