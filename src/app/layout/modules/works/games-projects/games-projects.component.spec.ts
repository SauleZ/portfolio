import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesProjectsComponent } from './games-projects.component';

describe('GamesProjectsComponent', () => {
  let component: GamesProjectsComponent;
  let fixture: ComponentFixture<GamesProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
