import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPartnerInstitutionComponent } from './add-partner-institution.component';

describe('AddPartnerInstitutionComponent', () => {
  let component: AddPartnerInstitutionComponent;
  let fixture: ComponentFixture<AddPartnerInstitutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPartnerInstitutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPartnerInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
