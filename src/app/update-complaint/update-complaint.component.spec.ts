import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComplaintComponent } from './update-complaint.component';

describe('UpdateComplaintComponent', () => {
  let component: UpdateComplaintComponent;
  let fixture: ComponentFixture<UpdateComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
