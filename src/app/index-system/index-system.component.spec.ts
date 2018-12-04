import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSystemComponent } from './index-system.component';

describe('IndexSystemComponent', () => {
  let component: IndexSystemComponent;
  let fixture: ComponentFixture<IndexSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
