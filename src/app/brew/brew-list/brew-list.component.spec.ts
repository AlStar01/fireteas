import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewListComponent } from './brew-list.component';

describe('BrewListComponent', () => {
  let component: BrewListComponent;
  let fixture: ComponentFixture<BrewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
