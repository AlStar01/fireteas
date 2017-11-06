import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityTeaDetailComponent } from './community-tea-detail.component';

describe('CommunityTeaDetailComponent', () => {
  let component: CommunityTeaDetailComponent;
  let fixture: ComponentFixture<CommunityTeaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityTeaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityTeaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
