import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutFComponent } from './layout-f.component';

describe('LayoutFComponent', () => {
  let component: LayoutFComponent;
  let fixture: ComponentFixture<LayoutFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
