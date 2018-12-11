import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDocumentationComponent } from './job-documentation.component';

describe('JobDocumentationComponent', () => {
  let component: JobDocumentationComponent;
  let fixture: ComponentFixture<JobDocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobDocumentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
