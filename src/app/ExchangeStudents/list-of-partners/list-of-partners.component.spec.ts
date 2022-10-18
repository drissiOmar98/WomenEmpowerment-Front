import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPartnersComponent } from './list-of-partners.component';

describe('ListOfPartnersComponent', () => {
  let component: ListOfPartnersComponent;
  let fixture: ComponentFixture<ListOfPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
