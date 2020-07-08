import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesignProjectsComponent } from './web-design-projects.component';

describe('WebDesignProjectsComponent', () => {
  let component: WebDesignProjectsComponent;
  let fixture: ComponentFixture<WebDesignProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDesignProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDesignProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
