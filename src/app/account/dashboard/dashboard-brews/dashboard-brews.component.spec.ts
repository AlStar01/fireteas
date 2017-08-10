import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBrewsComponent } from './dashboard-brews.component';

describe('DashboardBrewsComponent', () => {
  let component: DashboardBrewsComponent;
  let fixture: ComponentFixture<DashboardBrewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardBrewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBrewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
