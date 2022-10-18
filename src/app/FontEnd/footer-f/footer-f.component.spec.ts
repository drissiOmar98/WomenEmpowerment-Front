import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFComponent } from './footer-f.component';

describe('FooterFComponent', () => {
  let component: FooterFComponent;
  let fixture: ComponentFixture<FooterFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
