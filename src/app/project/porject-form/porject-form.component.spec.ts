import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorjectFormComponent } from './porject-form.component';

describe('PorjectFormComponent', () => {
  let component: PorjectFormComponent;
  let fixture: ComponentFixture<PorjectFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorjectFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
