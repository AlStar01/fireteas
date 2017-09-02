import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProfileHomeComponent } from './dashboard-profile-home.component';

describe('DashboardProfileComponent', () => {
  let component: DashboardProfileHomeComponent;
  let fixture: ComponentFixture<DashboardProfileHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardProfileHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProfileHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
