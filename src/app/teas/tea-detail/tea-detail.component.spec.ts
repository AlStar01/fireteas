import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaDetailComponent } from './tea-detail.component';

describe('TeaDetailComponent', () => {
  let component: TeaDetailComponent;
  let fixture: ComponentFixture<TeaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
