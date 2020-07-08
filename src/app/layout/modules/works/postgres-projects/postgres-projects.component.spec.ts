import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostgresProjectsComponent } from './postgres-projects.component';

describe('PostgresProjectsComponent', () => {
  let component: PostgresProjectsComponent;
  let fixture: ComponentFixture<PostgresProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostgresProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostgresProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
