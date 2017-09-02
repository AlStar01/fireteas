import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProfileEditComponent } from './dashboard-profile-edit.component';

describe('DashboardProfileEditComponent', () => {
  let component: DashboardProfileEditComponent;
  let fixture: ComponentFixture<DashboardProfileEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardProfileEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
