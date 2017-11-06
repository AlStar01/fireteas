import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityTeaListComponent } from './community-tea-list.component';

describe('CommunityTeaListComponent', () => {
  let component: CommunityTeaListComponent;
  let fixture: ComponentFixture<CommunityTeaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityTeaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityTeaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
