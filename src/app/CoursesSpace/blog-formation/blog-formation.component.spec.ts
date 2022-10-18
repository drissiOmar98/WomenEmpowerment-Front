import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFormationComponent } from './blog-formation.component';

describe('BlogFormationComponent', () => {
  let component: BlogFormationComponent;
  let fixture: ComponentFixture<BlogFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
