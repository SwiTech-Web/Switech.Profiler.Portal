import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFeatureComponent } from './sidebar-feature.component';

describe('SidebarFeatureComponent', () => {
  let component: SidebarFeatureComponent;
  let fixture: ComponentFixture<SidebarFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
