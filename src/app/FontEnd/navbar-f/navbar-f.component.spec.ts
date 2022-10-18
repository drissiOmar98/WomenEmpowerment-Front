import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFComponent } from './navbar-f.component';

describe('NavbarFComponent', () => {
  let component: NavbarFComponent;
  let fixture: ComponentFixture<NavbarFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
