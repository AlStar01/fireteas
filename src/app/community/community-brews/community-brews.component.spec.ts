import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityBrewsComponent } from './community-brews.component';

describe('CommunityBrewsComponent', () => {
  let component: CommunityBrewsComponent;
  let fixture: ComponentFixture<CommunityBrewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityBrewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityBrewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
