import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFComponent } from './home-f.component';

describe('HomeFComponent', () => {
  let component: HomeFComponent;
  let fixture: ComponentFixture<HomeFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
