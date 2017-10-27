import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityTeasComponent } from './community-teas.component';

describe('CommunityTeasComponent', () => {
  let component: CommunityTeasComponent;
  let fixture: ComponentFixture<CommunityTeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityTeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityTeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
