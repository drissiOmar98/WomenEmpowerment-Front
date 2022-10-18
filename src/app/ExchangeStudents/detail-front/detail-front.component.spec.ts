import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFrontComponent } from './detail-front.component';

describe('DetailFrontComponent', () => {
  let component: DetailFrontComponent;
  let fixture: ComponentFixture<DetailFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
