import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaravelProjectsComponent } from './laravel-projects.component';

describe('LaravelProjectsComponent', () => {
  let component: LaravelProjectsComponent;
  let fixture: ComponentFixture<LaravelProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaravelProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaravelProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
